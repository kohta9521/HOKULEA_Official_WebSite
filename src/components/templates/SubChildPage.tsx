'use client'
import React, { useEffect } from "react";
import Image from 'next/image';

// scss ipmort
import styles from './styles/SubChildpage.module.scss'
import SubPageBody from './SubPageBody';

// aos imports
import AOS from 'aos';
import 'aos/dist/aos.css';


// components import



// props type
export type SubChildPageProps = {
    id: number
    subTitle: string
    title: string
    desc: string
    children: React.ReactNode
}



const SubChildPage = ({
    id,
    subTitle,
    title,
    desc,
    children
}: SubChildPageProps) => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // アニメーションの持続時間
          once: true, // アニメーションを一度だけ実行する
        });
    }, []);
    return (
        <div className={styles.subChildPage} key={id}>
            <div className={styles.hero}>
                <div className={styles.leftBox}>
                    <p className={styles.subTitle} data-aos="fade-right">
                        {subTitle}
                    </p>
                    <h1 className={styles.title} data-aos="fade-right">
                        {title}
                    </h1>
                    <p className={styles.desc}>
                        {desc}
                    </p>
                </div>
                <div className={styles.rightBox} data-auto="fade-left">
                    <Image className={styles.imageItem} src={"/images/about.jpg"} width={1000} height={800} alt='hero部分の画像' />
                </div>
            </div>
            <SubPageBody id={1}>
                {children}
            </SubPageBody>
        </div>
    )
}

export default SubChildPage;