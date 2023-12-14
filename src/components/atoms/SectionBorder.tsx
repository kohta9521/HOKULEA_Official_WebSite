import React from 'react'


// scss import
import styles from './styles/SectionBorder.module.scss'

// props
export type SectionBorderProps = {
    id: number
    color?: 'white' | 'black' | 'gray'
}


const SectionBorder = ({
    id,
    color = 'white',
}: SectionBorderProps ) => {
    return (
        <div className={`${styles.borderContent}`} key={id}>
            <span className={`${styles[color]}`}>
            </span>
        </div>
    )
}

export default SectionBorder