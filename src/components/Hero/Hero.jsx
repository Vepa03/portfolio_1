import React from 'react'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jack</h1>
            <p className={styles.description}>
            I’m a web developer focused on building modern and user-friendly web applications. 
            I create strong frontend experiences using technologies like HTML, CSS, JavaScript, and React, while also developing effective backend solutions with tools like Node.js and Django. 
            Beyond writing code, I prioritize user experience and performance in every project. 
            </p>
            <a href='mailto:vepababayev03@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src='/coding_man.png' className={styles.heroImg} alt='Hero Image of Me'/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
  )
}
