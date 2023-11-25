import React from 'react'


// scss import
import styles from './styles/HoverTile.module.scss'

// components import
import Home from './tile/page'

const HoverTile = () => {
    return (
        <div className={styles.hoverTile}>
            <div className={styles.container}>
                <Home />
            </div>
        </div>
    )
}

export default HoverTile