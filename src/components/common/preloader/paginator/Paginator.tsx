import React, { useState } from 'react';
import styles from './Paginator.module.css'


type PaginatorPropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
}


const Paginator: React.FC<PaginatorPropsType> = ({ currentPage, onPageChanged, totalUsersCount, pageSize }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / 10);
    let [portionNumber, setportionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * pageSize + 1;
    let rightPortionNumber = portionNumber * pageSize;



    return (
        <div className={styles.userPagination}>
            {portionNumber > 1 && <button onClick={() => { setportionNumber(portionNumber - 1) }}>PREV</button>}
            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map((page) => {
                return <span className={currentPage === page ? styles.selectedPage : ''} key={page} onClick={() => {
                    onPageChanged(page)
                }}>{page}</span>
            })}
            {portionCount > portionNumber && <button onClick={() => { setportionNumber(portionNumber + 1) }}> NEXT</button>}
        </div>
    )
}

export default Paginator;

