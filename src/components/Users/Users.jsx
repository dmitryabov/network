import React from 'react';
import styles from './Users.module.css'
import avatar from '../../img/avatar.jpeg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../api/api';



const Users = (props) => {
    let pagesCount = Math.ceil( props.totalUsersCount/ props.pageSize)

    const pages = []

    for(let i = 1; i <= pagesCount; i ++){
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((page) => {
                  return <span className={props.currentPage === page ? styles.selectedPage : ''} key={page} onClick={() => {
                      props.onPageChanged(page)
                  }}>{page}</span>
                })}
                
            </div>
        
        {
            props.users.map(user => <div key={user.id }>
                <span>
                    <div>
                        <NavLink to={`/profile/` + user.id}>
                           <img src={user.photos.small !== null ? user.photos.small : avatar} className={styles.ava}></img>
                        </NavLink>
                        
                    </div>
                    <div>
                        {user.followed ? <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={ () => {
                            props.followThunkCreator(user.id)
                            
                        }}>unfollow</button> :
                         <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                            props.unfollowThunkCreator(user.id)
                        }}>follow</button>}
                       
                    </div>
                </span>
                <span>
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
    </div>
          )
}

export default Users;

// axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
//     withCredentials: true,
//     headers: {
//         'API-KEY': '879a4da8-207c-49bc-8168-624bacf4864e'
//     }
// }).then(response => {
//     if(response.data.resultCode == 0) {
//         props.follow(user.id)
//     }
// })