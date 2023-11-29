import React from 'react'
import Link from 'next/link'

// scss import
import styles from './styles/Contact.module.scss'

// components import
import SecTitle from '../atoms/SecTitle'
import ReadMoreButton from '../atoms/ReadMoreButton'


const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                    <SecTitle
                        id={5}
                        number={"05"}
                        jaTitle={"お問い合わせ"}
                        enTitle={"CONTACT"}
                    />
                    <p className={styles.text}>
                        以下のボタンよりお問い合わせページに移動しますのでそちらからよろしくお願いします。<br />
                        個人の方用と法人の方用のお問い合わせページがありますので、お間違いのないようにお願いします。<br />
                        また、各団体のSNS、メールアドレスなども記載しておりますのでそちらからもお問い合わせいただけます。<br />
                    </p>
                    <div className={styles.buttonBox}>
                        <Link className={styles.button} href="/contact">
                            <p className={styles.buttonText}>個人の方</p>
                        </Link>
                        <Link className={styles.button} href="/contact">
                            <p className={styles.buttonText}>法人の方</p>
                        </Link>
                    </div>
                    <ReadMoreButton id={5} link="/contact" text="VISIT PAGE" textColor="white" />
            </div>
        </div>
    )
}

export default Contact