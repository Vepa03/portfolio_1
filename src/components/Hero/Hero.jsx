import React from 'react'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Vepa</h1>
            <p className={styles.description}>
            Passionate Web & Android App Developer with experience in building responsive websites and mobile applications using React, Flutter, and Firebase. 
            Skilled in frontend development, UI/UX design, and integrating APIs
            </p>
            <a href='mailto:vepababayev03@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src='/coding_man.png' className={styles.heroImg} alt='Hero Image of Me'/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
  )
}
