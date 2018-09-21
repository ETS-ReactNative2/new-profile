import React from 'react';
import styles from './aboutme.module.css';
import whiteline from './assets/whiteline.png'

export default function AboutMe() {
  return(
    <div id='aboutme' className={styles.aboutMeWrapper}>
      <img className={styles.whiteline} src={whiteline} alt='white line'/>
      <div className={styles.aboutMeContent}>
        <h1>About Me :</h1>
        <h3>Hi, I'm Ted Leary.
        <br/>
        <br/>
         I'm a developer and I like creating new things.
         Here's a few of the tools I like to use to do that: </h3>
        <br/>
        <p>JavaScript / React / Redux / Angular / Node.js / Express / MongoDB / Firebase / SASS / Sketch </p>
      </div>
    </div>
  )
}
