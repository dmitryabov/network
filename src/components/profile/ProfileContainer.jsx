import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from '../../redux/profile-rediser';
import { setToggleFetching } from '../../redux/users-rediser';
import Profile from './Profile';



class  ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2
        }
 
        this.props.setToggleFetching(true)
          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
          })
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
      profile: state.profilePage.profile
      
    }
  }


const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile,
    setToggleFetching
    
  })(WithUrlDataContainerComponent); 