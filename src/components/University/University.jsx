import React from 'react'
import styles from "./University.module.css"

export const University = () => {
  return (
    <section className={styles.container} id='about'>
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>HighSchool</h3>
                        <h4>Sep, 2018 - Sep, 2021</h4>
                        <p>
                            Completed my high school education with a strong interest in technology and design. During this time, 
                            I began exploring frontend development, gaining early experience in building responsive web paages and user interfaces using HTML, CSS, and JavaScript
                        </p>
                    </div>
                </li>
            
                <li className={styles.aboutItem}>
                    <img src='/logo_university.svg'
                    alt='this is android img' className={styles.images}/>
                    <div lassName={styles.aboutItemText}>
                        <h3>Bachelor</h3>
                        <h4>Sep, 2024 - Present</h4>
                        <p>
                            Debrecen University I'm currently pursuing a Bachelor's degree in Computer Science. 
                            I specialize in mobile development with hands-on experience in building responsive and user-friendly Android applications using
                            modern technologies like Flutter, Firebase 
                        </p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
  )
}
