import React from 'react';
import styles from './Users.module.css'


const Users = (props) => {

    if(props.users.length === 0){
        props.setUsers(
            [{
                id: 1,
                message: 'good',
                likesCount: 12,
              },
              {
                id: 2,
                message: 'yup',
                likesCount: 11,
              },]
        )
    }


    
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img></img>
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
                                {user.fullName}
                            </div>
                            <div>
                                {user.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {user.location.city}
                            </div>
                            <div>
                                {user.location.country}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;