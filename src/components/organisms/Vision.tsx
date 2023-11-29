import React from 'react'


// scss import
import styles from './styles/Vision.module.scss'

// components import
import SecTitle from '../atoms/SecTitle'
import ReadMoreButton from '../atoms/ReadMoreButton'

const Vision = () => {
    return (
        <div className={styles.vision}>
            <div className={styles.container}>
                <SecTitle
                    id={1}
                    number={"03"}
                    jaTitle={"私たちの考える未来"}
                    enTitle={"VISION"}
                />
                <div className={styles.flexBox}>
                    <div className={styles.leftBox}>
                        <p className={styles.text}>
                        我々のコミュニティは若者によって成り立ってます。<br />
                        若者には未来があります。<br />
                        自分が描いた未来を諦め、無個性の道に進んでいく人を多くみてきました。<br />
                        せめて我々の周りにはそうなってほしくない。自分に自信と誇りをもって人生を切り拓いていってほしい。<br />
                        </p>
                    </div>
                    <div className={styles.rightBox}>
                        <ReadMoreButton id={1} link="/vision" text="READ MORE" textColor="black" />
                    </div>
                </div>
                <div className={styles.imageBox}>
                    <img className={styles.image} src="/images/vision.jpg" alt="bottomImage" />
                </div>
            </div>
        </div>
    )
}

export default Vision