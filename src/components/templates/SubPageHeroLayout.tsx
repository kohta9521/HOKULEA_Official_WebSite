import React from 'react'


// scss import
import styles from './styles/SubPageHeroLayout.module.scss'
import Link from 'next/link'

// array type
type linkLevel = {
    id: number
    text: string
    link: string
}

// props
export type SubPageHeroLayoutProps = {
    id: number
    linklevel: linkLevel[]
    title: React.ReactNode
    desc: string
    image: string
}

const SubPageHeroLayout = ({
    id,
    linklevel,
    title,
    desc,
    image
}: SubPageHeroLayoutProps) => {
    return (
        <div className={styles.herolayout}>
            <div className={styles.linkBox}>
                <ul>
                    {
                        linklevel.map((link: linkLevel) => {
                            return (
                                <li key={link.id}>
                                    <Link href={link.link}>
                                        {link.text}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={styles.titleBox}>
                    {title}
                </div>
                <p className={styles.desc}>
                    {desc}
                </p>
                <div className={styles.imgBox}>
                    <img src={image} alt="subPageHeroImage" />
                </div>
            </div>
        </div>
    )
}

export default SubPageHeroLayout