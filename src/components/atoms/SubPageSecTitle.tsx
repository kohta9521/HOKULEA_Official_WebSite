import React from 'react'


// scss import
import styles from './styles/SubPageSecTitle.module.scss'

// react icons import
import { RxSlash } from "react-icons/rx";

// type
export type SubPageSecTitleProps = {
    id: number
    subTitle: string
    mainTitle: string
}


const SubPageSecTitle = ({
    id,
    subTitle,
    mainTitle
}: SubPageSecTitleProps) => {
    return (
        <div className={styles.titleFlexBox} key={id}>
            <p className={styles.subTitle}>{subTitle}</p>
            <RxSlash className={styles.icons} />
            <h1 className={styles.mainTitle}>{mainTitle}</h1>
        </div>
    )
}

export default SubPageSecTitle