import React from 'react';
import styles from './titlecontainer.module.css';
import arrow from './assets/arrow.png';
import scratch from './assets/scratchbackground.png'

export default function TitleContainer(props){
  console.log(props);
  if (props.windowSize > 560) {
    return(
      <div id='home' className={styles.titleContainerWrapper}>
        <div className={styles.tedArrow}>
          <h3>Ted</h3>
          <div className={styles.arrow}>
            <img src={arrow} width='100px'/>
          </div>
        </div>
        <div className={styles.tedReading}>
          <img src={scratch} width='200px'/>
        </div>
      </div>

    )
  } else {
    return (
      <div>
        <div id='home' className={styles.titleContainerWrapperMobile}>
          <div className={styles.nameAndPic}>
            <h3 className={styles.name}>Ted</h3>
            <div className={styles.tedReading}>
              <img src={scratch} width='200px'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
