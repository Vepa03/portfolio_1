import React from 'react'
import styles from "./About.module.css"
export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src='/programmer.png' 
            alt='Me sitting with laptop'
            className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src='/cursor.png'
                alt='this is cursor img' className={styles.images}/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I'm a frontend developer with experience in building responsive applications and web pages
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src='/webpage.png'
                alt='this is webpage img' className={styles.images}/>
                <div lassName={styles.aboutItemText}>
                    <h3>Web Developer</h3>
                    <p>
                        I'm a Web developer with experience in building responsive web pages
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src='/android.png'
                alt='this is android img' className={styles.images}/>
                <div lassName={styles.aboutItemText}>
                    <h3>App Developer</h3>
                    <p>
                        I'm a App developer with experience in building responsive android applications 
                    </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
