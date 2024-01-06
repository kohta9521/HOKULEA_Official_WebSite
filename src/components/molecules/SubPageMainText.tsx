'use client'
import React, { useEffect } from "react";

// aos imports
import AOS from 'aos';
import 'aos/dist/aos.css';


// scss import
import styles from './styles/SubPageMainText.module.scss'


// props
export type SubPageMainTextProps = {
    id: number,
    text: string
}


const SubPageMainText = ({
    id,
    text
}: SubPageMainTextProps ) => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // アニメーションの持続時間
          once: true, // アニメーションを一度だけ実行する
        });
    }, []);
    return (
        <h1 className={styles.mainText} key={id} data-aos="fade-up">
            {text}
        </h1>
    )
}

export default SubPageMainText