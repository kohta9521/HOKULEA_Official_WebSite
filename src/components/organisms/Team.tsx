import React from 'react'


// scss import
import styles from './styles/Team.module.scss'

// components import
import SecTitle from '../atoms/SecTitle'

const Team = () => {
    return (
        <div className={styles.team}>
            <div className={styles.container}>
                <h1>
                    <SecTitle
                    id={4}
                    number={"04"}
                    jaTitle={"チームメイト"}
                    enTitle={"TEAM"}
                    />
                </h1>
            </div>
        </div>
    )
}

export default Team