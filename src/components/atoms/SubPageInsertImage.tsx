import React from 'react'


// scss
import styles from './styles/SubPageInsertImage.module.scss'
import Image from 'next/image'


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
        <div>
            <Image
                className={styles.image}
                src={image}
                width={500}
                height={300}
                alt={alt}
            />
        </div>
    )
}

export default SubPageInsertImage