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
        <div className={`${styles.borderContent}${styles[color]}`} key={id}>
        </div>
    )
}

export default SectionBorder