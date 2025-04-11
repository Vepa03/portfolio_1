import React from 'react'
import styles from "./Contacts.module.css"
export const Contacts = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out !</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="/mail.png" alt='this is mail'/>
                <a href='mailto:vepababayev03@gmail.com'>vepababayev03@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src="/linkedin.png" alt='this is linkedin'/>
                <a href='https://www.linkedin.com/in/vepa-babayev-273b22330/'>Linkedin</a>
            </li>
            <li className={styles.link}>
                <img src="/github.png" alt='this is github'/>
                <a href='https://github.com/Vepa03'>GitHub</a>
            </li>
            <li className={styles.link}>
                <img src="/instagram.png" alt='this is instagram'/>
                <a href='https://www.instagram.com/vepa_babayef/'>Instagram</a>
            </li>
            
        </ul>
    </footer>
  )
}
