import React from 'react';
import styles from './projectcard.module.css';
import open from './assets/open.png'

export default function ProjectCard(props){
  console.log(props.image[Object.keys(props.image)[0]]);
  return(
    <div className={styles.projectCardWrapper}>
      <a href={props.link} target="_blank">
        <div >{props.live && (
          <h3 className={styles.live}>Live!</h3>
        )}</div>
      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <div className={styles.cardImage}>
          <img src={props.image[Object.keys(props.image)[0]]} alt='project image'/>
        </div>
      </div>
      <div className={styles.cardOverlay}>
        <div className={styles.overlayImage}>
          <img src={open}/>
        </div>
      </div>

      </a>
    </div>
  )
}
