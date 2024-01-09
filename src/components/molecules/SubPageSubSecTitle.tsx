'use client'
import React, { useEffect } from "react";


// aos imports
import AOS from 'aos';
import 'aos/dist/aos.css';

// scss import
import styles from './styles/SubPageSubSecTitle.module.scss';

// props
export type SubPageSubSecTItleProps = {
    id: number
    text: string
}

const SubPageSubSecTitle = ({
    id,
    text
}: SubPageSubSecTItleProps) => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // アニメーションの持続時間
          once: true, // アニメーションを一度だけ実行する
        });
    }, []);
    return (
        <h2 className={styles.subTitle} key={id} data-aos="fade-up">
            {text}
        </h2>
    )
}

export default SubPageSubSecTitle