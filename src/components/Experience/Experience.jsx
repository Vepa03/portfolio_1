import React from 'react'
import styles from "./Experience.module.css"
import skills from "../../data/skills.json"
import history from '../../data/history.json'
export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill,id)=>{
                    return(
                        <div className={styles.skill} key={id}>
                            <div className={styles.skillImageContainer}>
                                <img src={skill.ImageSrc} alt={skill.title}/>
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
            <ul className={styles.history}>
                {history.map((history, id)=>{
                    return (
                    <li key={id} className={styles.historyItem}>
                        <img 
                        src={history.imageSrc} 
                        alt={history.organisation}
                        />
                        <div className={styles.historyItemDetailes}>
                            <h3>{history.role}</h3>
                            <p>{history.startDate} - {history.endDate}</p>
                            <ul>
                                <li>
                                    {history.experience}
                                </li>
                            </ul>
                        </div>
                    </li>
                    )
                })}
            </ul>
            
        </div>
    </section>
  )
}
