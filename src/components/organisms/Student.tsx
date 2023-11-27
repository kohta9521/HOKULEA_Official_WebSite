import React from 'react'


// scss import
import styles from './styles/Student.module.scss'

// components import


const Student = () => {
    return (
        <div className={styles.student}>
            <div className={styles.container}>
                <h1>
                    student area!
                </h1>
            </div>
        </div>
    )
}

export default Student