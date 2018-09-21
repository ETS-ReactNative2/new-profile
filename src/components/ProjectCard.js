import React from 'react';
import styles from './projectcard.module.css';

export default function ProjectCard(props){
  console.log(props.image[Object.keys(props.image)[0]]);
  return(
    <div className={styles.projectCardWrapper}>
      <a href={props.link}>
      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <div className={styles.cardImage}>
          <img src={props.image[Object.keys(props.image)[0]]} alt='project image'/>
        </div>
      </div>
      </a>
    </div>
  )
}
