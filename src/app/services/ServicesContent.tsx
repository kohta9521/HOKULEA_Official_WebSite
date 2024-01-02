import React from 'react'


// scss import
import styles from './ServicesContent.module.scss'

// components import
import SubPageSecTitle from '@/components/atoms/SubPageSecTitle'
import SpaceBox from '@/components/atoms/SpaceBox'
import Link from 'next/link'
import Image from 'next/image'


const ServicesContent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.listBox}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>いい技術をもっているのにそれをどう魅せていいかわからない</li>
                    <li className={styles.listItem}>アイデアがあるがそれを実現できない</li>
                    <li className={styles.listItem}>感動を与えたい</li>
                </ul>
                <p className={styles.mainText}>クリエイティブでエナジーある若者とタイアップしてみませんか。</p>
                <br />
                <p className={styles.mainText}>HOKULEAではクリエイティブに富んだメンバーが数多く在籍しています。</p>
                <p className={styles.mainText}>貴社のプロダクトやイベントに合わせ、HOKULEAのチームがサポートに入りクリエイティブに仕上げていきます。</p>
            </div>

            <SpaceBox id={1} level="small" />

            {/* 事業概要 */}
            <div className={styles.services}>
                <div className={styles.flexBox}>
                    <Link className={styles.linkBox} href={"/community/outdoor"}>
                        <Image
                            className={styles.image}
                            src={"/images/about.jpg"}
                            alt={"rover"}
                            width={400}
                            height={300}
                        />
                        <h1 className={styles.serviceTitle}>
                            OUTDOOR
                        </h1>
                    </Link>
                    <Link className={styles.linkBox} href={"/community/surf"}>
                        <Image
                            className={styles.image}
                            src={"/images/about.jpg"}
                            alt={"rover"}
                            width={400}
                            height={300}
                        />
                        <h1 className={styles.serviceTitle}>
                            SERFING
                        </h1>
                    </Link>
                </div>
                <div className={styles.flexBox}>
                    <Link className={styles.linkBox} href={"/community/vybe"}>
                        <Image
                            className={styles.image}
                            src={"/images/about.jpg"}
                            alt={"rover"}
                            width={400}
                            height={300}
                        />
                        <h1 className={styles.serviceTitle}>
                            ENVIRONMENT
                        </h1>
                    </Link>
                    <Link className={styles.linkBox} href={"/community/event"}>
                        <Image
                            className={styles.image}
                            src={"/images/about.jpg"}
                            alt={"rover"}
                            width={400}
                            height={300}
                        />
                        <h1 className={styles.serviceTitle}>
                            EVENT
                        </h1>
                    </Link>
                </div>
            </div>

            <SpaceBox id={1} level="medium" />

            <SubPageSecTitle
                id={6}
                subTitle={'About our wonderful organization HOKULEA'}
                mainTitle={"事業概要"}
            />


        </div>
    )
}

export default ServicesContent