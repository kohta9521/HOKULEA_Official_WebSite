import React from "react";

// scss import
import styels from "./styles/ScrollBox.module.scss";

// icons import
import { GoTriangleDown } from "react-icons/go";

const ScrollBox = () => {
  return (
    <div className={styels.box}>
      <div className={styels.textBox}>
        <GoTriangleDown className={styels.triangle} />
        <p className={styels.text}>SCROLL DOWN</p>
      </div>
      <div className={styels.imageBox}>
        <img className={styels.img} src="/images/barcode.png" alt="画像" />
      </div>
    </div>
  );
};

export default ScrollBox;
