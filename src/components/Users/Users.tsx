import React from 'react';
import styles from './Users.module.css'
import Paginator from '../common/preloader/paginator/Paginator';
import User from './User';
import { userType } from '../../types/types';


type UsersPropsTypes = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (PageNamber: number) => void
    users: Array<userType>
    unfollow: (id: number) => void
    follow: (id: number) => void
    followThunkCreator: (id: number) => void

    isFollowingInProgress: Array<number>
    unfollowThunkCreator: (id: number) => void


}

const Users: React.FC<UsersPropsTypes> = (props) => {

    const { currentPage, onPageChanged, totalUsersCount, pageSize, isFollowingInProgress, unfollowThunkCreator, followThunkCreator, users } = props
    return (
        <div className={styles.userContainer}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
            {
                users.map(user =>
                    <User key={user.id} user={user} isFollowingInProgress={isFollowingInProgress} unfollowThunkCreator={unfollowThunkCreator} followThunkCreator={followThunkCreator} />
                )
            }
        </div>
    )
}

export default Users;

