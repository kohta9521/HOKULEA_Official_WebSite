'use client'
import React, { useEffect } from "react";
import Image from 'next/image'


// aos imports
import AOS from 'aos';
import 'aos/dist/aos.css';

// scss
import styles from './styles/SubPageInsertImage.module.scss'

// props
export type SubPageInsertImageProps = {
    id: number
    image: string
    alt: string
}


const SubPageInsertImage = ({
    id,
    image,
    alt
}: SubPageInsertImageProps) => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // アニメーションの持続時間
          once: true, // アニメーションを一度だけ実行する
        });
    }, []);
    return (
        <div key={id} className={styles.imageBox} data-aos="fade-up">
            <Image
                className={styles.image}
                src={image}
                width={500}
                height={500}
                alt={alt}
            />
        </div>
    )
}

export default SubPageInsertImage