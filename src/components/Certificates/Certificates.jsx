import React from 'react'
import styles from "./Certificates.module.css"
import certificates from "../../data/certificates.json"

export const Certificates = () => {
  return (
    <section className={styles.contain} >
        <h2 className={styles.at}>Certificates</h2>
        <div className={styles.certificates}>
            {certificates.map((certificate, id) =>{
                return(
                    <div key={id} className={styles.container}>
                        <img src={certificate.image} alt={certificate.title}
                        className={styles.image}/>
                        <h3 className={styles.title}>{certificate.title}</h3>
                        <p className={styles.description}>{certificate.description}</p>

                        <div className={styles.links}>
                            <a href={certificate.download} className={styles.link} download>Download</a>
                        </div>
                    </div>
                    
                );
            })}
        </div>
    </section>
  );
}
