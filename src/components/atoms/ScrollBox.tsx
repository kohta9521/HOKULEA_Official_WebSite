import React from 'react'


// scss import
import styels from './styles/ScrollBox.module.scss'


const ScrollBox = () => {
    return (
        <div className={styels.box}>
            <div className={styels.textBox}>
                <span className={styels.triangle}></span>
                <p className={styels.text}>SCROLL DOWN</p>
            </div>
            <div className={styels.imageBox}>
                <img className={styels.img} src="/images/barcode.png" alt="画像" />
            </div>
        </div>
    )
}

export default ScrollBox