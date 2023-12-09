import React from 'react';
import Image from 'next/image';

// scss import
import styles from './styles/PersonCard.module.scss';


// type
export type PersonCardProps = {
    id: number,
    name: string,
    post: string,
    image: string,
    desc: string
};


const PersonCard = ({
    id,
    name,
    post,
    image,
    desc
}: PersonCardProps) => {
    return (
        <div className={styles.card} key={id}>
            <div className={styles.leftBox}>
                <img className={styles.image} src={image} alt="personImg" />
            </div>
            <div className={styles.rightBox}>
                <h1 className={styles.name}>
                    {name}
                </h1>
                <p className={styles.post}>
                    {post}
                </p>
                <p className={styles.desc}>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default PersonCard;