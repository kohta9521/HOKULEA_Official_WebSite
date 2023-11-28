import React from 'react'


// scss import
import styles from './styles/Footer.module.scss'
import Link from 'next/link'

// components import

// react icons
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topBox}>
                    <Link className={styles.footerLink} href={"/about"}>
                        <p className={styles.footerLinkText}>
                            もっと知る
                        </p>
                    </Link>
                    <Link className={styles.footerLink} href={"/about"}>
                        <p className={styles.footerLinkText}>
                            もっと知る
                        </p>
                    </Link>
                </div>
                <div className={styles.centerBox}>
                    <div className={styles.leftBox}>
                        <Link className={styles.logoLink} href={"/"}>
                            HOKULEA
                        </Link>
                        <ul>
                            <li>
                                <Link className={styles.list} href={"/"}>
                                    <p className={styles.listText}>
                                        About
                                    </p>
                                    <FaExternalLinkAlt />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.list} href={"/"}>
                                    <p className={styles.listText}>
                                        Services
                                    </p>
                                    <FaExternalLinkAlt />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.list} href={"/"}>
                                    <p className={styles.listText}>
                                        Vision
                                    </p>
                                    <FaExternalLinkAlt />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.list} href={"/"}>
                                    <p className={styles.listText}>
                                        Student
                                    </p>
                                    <FaExternalLinkAlt />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.list} href={"/"}>
                                    <p className={styles.listText}>
                                        Team
                                    </p>
                                    <FaExternalLinkAlt />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.list} href={"/"}>
                                    <p className={styles.listText}>
                                        Contact
                                    </p>
                                    <FaExternalLinkAlt />
                                </Link>
                            </li>
                        </ul>
                        <Link className={styles.contactButton} href={"/contact"}>
                            <p className={styles.contactButtonText}>
                                話をする
                            </p>
                        </Link>
                        <div className={styles.snsBox}>
                            <ul>
                                <li>
                                    <Link className={styles.snsLists} href={"/"}>
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link className={styles.snsLists} href={"/"}>
                                        <FaTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link className={styles.snsLists} href={"/"}>
                                        <FaYoutube />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.rightBox}>
                        <p className={styles.nextText}>
                            NEXT
                        </p>
                        <Link className={styles.nextButton} href={"/about"}>
                            ABOUT
                            <IoIosArrowRoundForward />
                        </Link>
                    </div>
                </div>
                <div className={styles.bottomBox}>
                    <p className={styles.copyRight}>
                        ©︎2021 HOKULEA
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer