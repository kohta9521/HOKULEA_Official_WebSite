import React from 'react'
import Image from 'next/image'

// scss
import styles from './styles/SubPageInsertImage.module.scss'

// props
export type SubPageInsertImageProps = {
    id: number
    image: string
    alt: string
}


const SubPageInsertImage = ({
    id,
    image,
    alt
}: SubPageInsertImageProps) => {
    return (
        <div key={id} className={styles.imageBox}>
            <Image
                className={styles.image}
                src={image}
                width={500}
                height={500}
                alt={alt}
            />
        </div>
    )
}

export default SubPageInsertImage