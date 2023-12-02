import React from 'react'


// scss import
import styles from './styles/SubPageMainText.module.scss'


// props
export type SubPageMainTextProps = {
    id: number,
    text: string
}


const SubPageMainText = ({
    id,
    text
}: SubPageMainTextProps ) => {
    return (
        <h1 className={styles.mainText} key={id}>
            {text}
        </h1>
    )
}

export default SubPageMainText