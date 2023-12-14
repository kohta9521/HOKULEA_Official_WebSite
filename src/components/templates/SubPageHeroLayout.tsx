import React from 'react'
import Link from 'next/link'

// scss import
import styles from './styles/SubPageHeroLayout.module.scss'

// react icons import
import { RxSlash } from "react-icons/rx";


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
                                    <RxSlash className={styles.icons} />
                                    <Link className={styles.text} href={link.link}>
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
                    <img className={styles.image} src={image} alt="subPageHeroImage" />
                </div>
            </div>
        </div>
    )
}

export default SubPageHeroLayout