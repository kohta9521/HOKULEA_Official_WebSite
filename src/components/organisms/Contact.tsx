import React from 'react'


// scss import
import styles from './styles/Contact.module.scss'
import SecTitle from '../atoms/SecTitle'

// components import


const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                <h1>
                    <SecTitle
                        id={5}
                        number={"05"}
                        jaTitle={"お問い合わせ"}
                        enTitle={"CONTACT"}
                    />
                </h1>
            </div>
        </div>
    )
}

export default Contact