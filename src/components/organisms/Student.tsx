import React from 'react'


// scss import
import styles from './styles/Student.module.scss'

// components import
import SecTitle from '../atoms/SecTitle'
import ReadMoreButton from '../atoms/ReadMoreButton'

const Student = () => {
    return (
        <div className={styles.student}>
            <div className={styles.container}>
                <h1>
                    <SecTitle
                        id={4}
                        number={"04"}
                        jaTitle={"学生"}
                        enTitle={"STUDENTS"}
                    />
                    <div className={styles.flexBox}>
                        <div className={styles.leftBox}>
                            <img className={styles.img} src="/images/about.jpg" alt="" />
                        </div>
                        <div className={styles.rightBox}>
                            <p className={styles.text}>
                                最高にCoolでfunなコミュニティに入りませんか？<br />
                                HOKULEAだからこそ出会えるメンバー、<br />
                                HOKULEAだからこそ体験できないアクティビティ、<br />
                                イベントがここにはあります。<br />
                            </p>
                            <div className={styles.buttonBox}>
                                <ReadMoreButton id={4} link="/student" text="READ MORE" textColor="white" />
                            </div>
                        </div>
                    </div>
                </h1>
            </div>
        </div>
    )
}

export default Student