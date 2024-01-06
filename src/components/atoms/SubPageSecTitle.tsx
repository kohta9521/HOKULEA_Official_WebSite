'use client'
import React, { useEffect } from "react";

// aos imports
import AOS from 'aos';
import 'aos/dist/aos.css';


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
    useEffect(() => {
        AOS.init({
          duration: 1000, // アニメーションの持続時間
          once: true, // アニメーションを一度だけ実行する
        });
    }, []);
    return (
        <div className={styles.titleFlexBox} key={id} data-aos="fade-up">
            <p className={styles.subTitle}>{subTitle}</p>
            <RxSlash className={styles.icons} />
            <h1 className={styles.mainTitle}>{mainTitle}</h1>
        </div>
    )
}

export default SubPageSecTitle