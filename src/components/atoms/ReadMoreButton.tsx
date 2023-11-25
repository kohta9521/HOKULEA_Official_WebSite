import React from 'react'
import Link from 'next/link'

// scss import
import styles from './styles/ReadMoreButton.module.scss'

// react icons import
import { RxTriangleRight } from "react-icons/rx";

// type
export type ReadMoreButtonProps = {
    id: number
    link: string
    text?: string
    textColor?: 'white' | 'black'
}


const ReadMoreButton = ({
    id,
    link,
    text = 'READ MORE',
    textColor = 'white'
}: ReadMoreButtonProps) => {
    return (
        <Link key={id} href={link} className={`${styles.moreButton} ${styles[textColor]}`}>
            <RxTriangleRight className={styles.triangle} />
            {text}
        </Link>
    )
}

export default ReadMoreButton