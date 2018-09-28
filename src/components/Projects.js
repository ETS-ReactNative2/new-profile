import React from 'react';
import styles from './projects.module.css';
import ProjectCard from './ProjectCard.js'
import ozone1 from './assets/ozone1.png'
import commongood from './assets/commongood.png'
import taproom from './assets/taproom.png'
import backcountry from './assets/backcountry.png'
import whiteline2 from './assets/whiteline2.png'
import jasibe from './assets/jasibe.png'

export default function Projects(){
  const projectArray = [
    {
    name: 'Ozone',
    description: 'Portland area rock climbing guidebook app - Built with React/Redux/Firebase.',
    image: {ozone1},
    link: 'https://github.com/1stBoltCrux/capstone-UI/blob/master/README.md'

  },
  {
    name: 'Common Good',
    description: 'UI/Design mockup for a shared space website with custom art and icons.',
    image: {commongood},
    link: 'https://github.com/1stBoltCrux/shared-space'

  },
  {
    name: 'React Taproom',
    description: 'A taproom style CRUD app refactored into React from Angular.',
    image: {taproom},
    link: 'https://github.com/1stBoltCrux/Taproom-React'

  },
  {
    name: 'Backcountry',
    description: 'A responsive HTML/CSS clone of Backcountry.com.',
    image: {backcountry},
    link: 'https://github.com/1stBoltCrux/Backcountry'

  },
  {name: "Artist Profile",
    description: "A responsive artist's portfolio gallery with masonry style layout - React/Firestore",
    image: {jasibe},
  link: 'https://github.com/1stBoltCrux/jasi-portfolio'}

  ]

  return(
    <div className={styles.projectsWrapper}>
      <img className={styles.whiteline2} src={whiteline2} alt='white line'/>
      <a name='work'/>
      <div className={styles.title}>
        <h1>My Work : </h1>
      </div>
      <div className={styles.cardContainer}>


      {projectArray.map((project, index) =>
        <ProjectCard
        name={project.name}
        description={project.description}
        image={project.image}
        link={project.link}
      />
      )}
      </div>
    </div>
  );
}
