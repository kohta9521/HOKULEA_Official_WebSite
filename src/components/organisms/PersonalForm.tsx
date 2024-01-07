import React from 'react';
import Link from 'next/link';


// scss import
import styles from './styles/PersonalForm.module.scss';


const PersonalForm = () => {
    return (
        <div className={styles.container}>
            <h1 >個人のお客様用お問い合わせフォーム</h1>
            <div className={styles.buttonBox}>
                <Link href={"https://forms.gle/cj2GatJSmfiWFqiJ7"} className={styles.button}>
                    フォームはこちらから
                </Link>
            </div>
        </div>
    )
}

export default PersonalForm