import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfileThunkCreator } from '../../redux/profile-rediser';
import Profile from './Profile';
import { Redirect } from 'react-router-dom';
import withAuthRedirect from '../hoc/withAuthRedirect';



class  ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2
        }
 
        this.props.getProfileThunkCreator(userId)
      }

        render() {
            return (
                <div >
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
            );
        }
}

const mapStateToProps  = (state) => {
    return {
      profile: state.profilePage.profile,
    }
 }




let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToPropsForRedirect  = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

AuthRedirectComponent= connect(mapStateToPropsForRedirect)(AuthRedirectComponent)


const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    getProfileThunkCreator,
    
  })(WithUrlDataContainerComponent); 