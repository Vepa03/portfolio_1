import React from 'react'
import styles from "./CV.module.css"
export const CV = () => {
  return (
    <h2 className={styles.cv}>You are feel free to 
        <a href='https://drive.google.com/file/d/17MsUDd9pwxX95Yv_9wldyCYTabISMaL9/view'> check </a>
         or 
        <a href='/./public/my_cv.pdf' download> download </a> 
         my CV
    </h2>
  )
}
