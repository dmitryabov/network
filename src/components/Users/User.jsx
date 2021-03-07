import React from 'react';
import styles from './Users.module.css'
import avatar from '../../img/avatar.jpeg';
import { NavLink } from 'react-router-dom';



const User = (props) => {

    const {isFollowingInProgress, unfollowThunkCreator, user, followThunkCreator} = props
    return (
      <div className={styles.user}>
                <span>
                    <div>
                        <NavLink to={`/profile/` + user.id}>
                           <img src={user.photos.small !== null ? user.photos.small : avatar} className={styles.ava}></img>
                        </NavLink>
                        
                    </div>
                    <div>
                        {user.followed ? <button className={styles.btn} disabled={isFollowingInProgress.some(id => id === user.id)} onClick={ () => {
                            followThunkCreator(user.id)
                            
                        }}>unfollow</button> :
                         <div className={`${styles.btn} + ' ' + ${styles.btnFollow}`} disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollowThunkCreator(user.id)
                        }}>follow</div>}
                       
                    </div>
                </span>
                <span className={styles.userInfo}>
                    <span>
                        <div>
                            <span>
                            {user.name}
                            {user.status}
                            </span>
                            
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </span>
                </span>
            </div>)
}

export default User;

