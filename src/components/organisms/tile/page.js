'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Project from './components/project';
import Modal from './components/modal';

const projects = [
  {
    title: "OUTDOOR",
    src: "outdoor.png",
    color: "#000000",
    link: '/community/outdoor'
  },
  {
    title: "SURFING",
    src: "surfing.jpg",
    color: "#000000",
    link: '/community/outdoor'
  },
  {
    title: "ENVIRONMENT",
    src: "environment.jpg",
    color: "#000000",
    link: '/community/outdoor'
  },
  {
    title: "PARTY",
    src: "party.jpg",
    color: "#000000",
    link: '/community/outdoor'
  }
]

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}