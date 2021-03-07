import React from 'react';
import styles from './Users.module.css'
import Paginator from '../common/preloader/paginator/Paginator';
import User from './User';



const Users = (props) => {

    const {currentPage, onPageChanged, totalUsersCount, pageSize, isFollowingInProgress, unfollowThunkCreator, followThunkCreator } = props
    return (
        <div className={styles.userContainer}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            
        
        {
            props.users.map(user => 
              <User key={user.id} user={user} isFollowingInProgress={isFollowingInProgress} unfollowThunkCreator={unfollowThunkCreator} followThunkCreator={followThunkCreator}/>
           )
        }
    </div>
          )
}

export default Users;

