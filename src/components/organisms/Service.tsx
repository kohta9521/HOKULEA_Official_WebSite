import React from 'react'
import Link from 'next/link'


// scss import
import styles from './styles/Service.module.scss'

// components import
import SectionBorder from '../atoms/SectionBorder'
import SecTitle from '../atoms/SecTitle'
import ReadMoreButton from '../atoms/ReadMoreButton'


const Service = () => {
    return (
        <div className={styles.service}>
            <div className={styles.container}>
                {/* TODO: なぜかコンポーネントが読み込まれない */}
                <SectionBorder id={1} color='white' />
                <SecTitle
                    id={1}
                    number={"02"}
                    jaTitle={"各種サービス"}
                    enTitle={"SERVICES"}
                />
                <div className={styles.mainTextBox}>
                    <p className={styles.text}>
                        <span className={styles.accentText}>いい技術をもっているのにそれをどう魅せていいかわからない</span><br />
                        <span className={styles.accentText}>アイデアがあるがそれを実現できない</span><br />
                        <span className={styles.accentText}>感動を与えたい</span><br />
                        <br />
                        クリエイティブでエナジーある若者とタイアップしてみませんか。<br />
                        HOKULEAではクリエイティブに富んだメンバーが数多く在籍しています。<br />
                        貴社のプロダクトやイベントに合わせ、HOKULEAのチームがサポートに入りクリエイティブに仕上げていきます。<br />
                    </p>
                    <ReadMoreButton id={1} link="/services" text="READ MORE" textColor="white" />
                </div>
                {/* ここから各種サービスの絶対位置の記述 */}
                <div className={`${styles.card} ${styles.card1}`}>
                    <p className={styles.cardTitle}>
                        EVENT PRODUCE
                    </p>
                    <img className={styles.cardImage} src="/images/outdoor.png" alt="serviceCardImage" />
                    <Link className={styles.cardVisitButton} href={"/services/eventproduce"}>VIEW MORE</Link>
                </div>
                <div className={`${styles.card} ${styles.card2}`}>
                    <p className={styles.cardTitle}>
                        PRODUCT / SERVICE PRODUCE
                    </p>
                    <img className={styles.cardImage} src="/images/outdoor.png" alt="serviceCardImage" />
                    <Link className={styles.cardVisitButton} href={"/services/eventproduce"}>VIEW MORE</Link>
                </div>
            </div>
        </div>
    )
}

export default Service