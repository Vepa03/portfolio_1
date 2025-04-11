import React from 'react'
import styles from "./Projects.module.css"
import projects from "../../data/projects.json"

export const Projects = () => {
  return (
    <section className={styles.contain} id='projects'>
        <h2 className={styles.at}>Projects</h2>
        <div className={styles.projects}>
            {projects.map((project, id) =>{
                return(
                    <div key={id} className={styles.container}>
                        <img src={project.ImageSrc} alt={project.title}
                        className={styles.image}/>
                        <h3 className={styles.title}>{project.title}</h3>
                        <p className={styles.description}>{project.description}</p>
                        <ul className={styles.skills}>
                            {project.skills.map((skill, id)=>{return(
                                <li key={id} className={styles.skill}>{skill}</li>
                            );
                            })}
                        </ul>
                        <div className={styles.links}>
                            <a href={project.demo} className={styles.link} download>Download</a>
                            <a href={project.source} className={styles.link}>Source</a>
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
  )
}
