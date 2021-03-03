import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from '../../redux/profile-rediser';
import Profile from './Profile';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';



class  ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 9063
        }
 
        this.props.getProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId)
        
      }

      
        render() {
            return (
                <div >
                <Profile {...this.props} profile={this.props.profile}  status={this.props.status} updateStatusThunkCreator={this.props.updateStatusThunkCreator}/>
            </div>
            );
        }
}

const mapStateToProps  = (state) => {
    return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
    }
 }

export default compose(
  connect(mapStateToProps, {
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)