import React from 'react';
import styles from './Users.module.css'
import avatar from '../../img/avatar.jpeg';



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
                        <img src={user.photos.small !== null ? user.photos.small : avatar} className={styles.ava}></img>
                    </div>
                    <div>
                        {user.followed ? <button onClick={ () => {
                            props.unfollow(user.id)
                        }}>unfollow</button> : <button onClick={() => {
                            props.follow(user.id)
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