import React from 'react'


// scss import
import styles from './styles/SpaceBox.module.scss'


// props
export type SpaceBoxProps = {
    id: number
    level: 'small' | 'medium' | 'large'
}


const SpaceBox = ({
    id,
    level = 'medium'
}: SpaceBoxProps) => {
    return (
        <div className={`${styles.box} ${styles[level]}`}>
        </div>
    )
}

export default SpaceBox