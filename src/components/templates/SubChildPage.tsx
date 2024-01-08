import React from 'react';
import Image from 'next/image';

// scss ipmort
import styles from './styles/SubChildpage.module.scss'


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
    return (
        <div className={styles.subChildpage} key={id}>
            <div className={styles.hero}>
                <div className={styles.leftBox}>
                    <p className={styles.subTitle}>
                        {subTitle}
                    </p>
                    <h1 className={styles.title}>
                        {title}
                    </h1>
                    <p className={styles.desc}>
                        {desc}
                    </p>
                </div>
                <div className={styles.rightBox}>
                    <Image className={styles.imageItem} src={"/images/about.jpg"} width={1000} height={800} alt='hero部分の画像' />
                </div>
            </div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}

export default SubChildPage;