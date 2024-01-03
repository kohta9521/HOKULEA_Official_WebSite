import React from 'react'
import Link from 'next/link'

// scss import
import styles from './styles/Footer.module.scss'


// components import

// react icons
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topBox}>
                    <Link className={styles.footerLink} href={"/contact"}>
                        <p className={styles.footerLinkText}>
                            一緒に何かを作りたい!
                        </p>
                    </Link>
                    <Link className={styles.footerLink} href={"/contact"}>
                        <p className={styles.footerLinkText}>
                            団体についてもっと知りたい
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
                                <Link className={styles.list} href={"/about"}>
                                    <p className={styles.listText}>
                                        About
                                    </p>
                                    {/* <FaExternalLinkAlt className={styles.linkIcon} /> */}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.list} href={"/services"}>
                                    <p className={styles.listText}>
                                        Services
                                    </p>
                                    {/* <FaExternalLinkAlt className={styles.linkIcon} /> */}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.list} href={"/vision"}>
                                    <p className={styles.listText}>
                                        Vision
                                    </p>
                                    {/* <FaExternalLinkAlt className={styles.linkIcon} /> */}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.list} href={"/student"}>
                                    <p className={styles.listText}>
                                        Student
                                    </p>
                                    {/* <FaExternalLinkAlt className={styles.linkIcon} /> */}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.list} href={"/team"}>
                                    <p className={styles.listText}>
                                        Team
                                    </p>
                                    {/* <FaExternalLinkAlt className={styles.linkIcon} /> */}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.list} href={"/contact"}>
                                    <p className={styles.listText}>
                                        Contact
                                    </p>
                                    {/* <FaExternalLinkAlt className={styles.linkIcon} /> */}
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
                                    <Link className={styles.snsLists} href={"https://www.instagram.com/hokulea7311/?hl=ja"}>
                                        <FaInstagram className={styles.snsIcon} />
                                    </Link>
                                </li>
                                <li>
                                    <Link className={styles.snsLists} href={"https://twitter.com/Hokulea56362564"}>
                                        <FaTwitter className={styles.snsIcon} />
                                    </Link>
                                </li>
                                <li>
                                    <Link className={styles.snsLists} href={"https://www.tiktok.com/@hokulea7311"}>
                                        <FaTiktok className={styles.snsIcon} />
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
                            <IoIosArrowRoundForward className={styles.arrowIcon} />
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