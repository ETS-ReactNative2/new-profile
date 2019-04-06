import React from 'react';
import styles from './projects.module.css';
import ProjectCard from './ProjectCard.js'
import ozone1 from './assets/ozone1.png'
import commongood from './assets/commongood.png'
import taproom from './assets/taproom.png'
import backcountry from './assets/backcountry.png'
import whiteline2 from './assets/whiteline2.png'
import jasibe from './assets/jasibe.png'
import canyons from './assets/canyons.png'
import goblin from './assets/goblin-exploder.png'
import maps from './assets/google-alt.png'

export default function Projects(){
  const projectArray = [
    {
      name: "Grand Opening",
      description: "Community Grand Opening landing page for Taylor Morrison.",
      image: {canyons},
    link: 'https://www.taylormorrison.com/new-homes/florida/orlando/clermont/highland-ranch-community/grand-opening',
  live: true},
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
    name: 'Goblin Exploder',
    description: 'Pet project "tower defense" style game built in React, Styled Components, React-dnd, React Sound',
    image: {goblin},
    link: 'http://goblin-exploder.surge.sh/',
    live: true

  },
  {
    name: 'Maps Alternative',
    description: 'jQuery/PHP app used as a static replacement for google-maps, deployed through Wordpress',
    image: {maps},
    link: 'https://frederickamanor.org/',
    live: true,
  },
  // {
  //   name: 'Backcountry',
  //   description: 'A responsive HTML/CSS clone of Backcountry.com.',
  //   image: {backcountry},
  //   link: 'https://github.com/1stBoltCrux/Backcountry'
  // },
  {name: "Artist Profile",
    description: "A responsive artist's portfolio gallery with masonry style layout - React/Firestore",
    image: {jasibe},
  link: 'https://github.com/1stBoltCrux/jasi-portfolio'},



  ]

  return(
    <div className={styles.projectsWrapper}>
      <a name='work'/>
      <div className={styles.title}>
      </div>
      <div className={styles.cardContainer}>


        {projectArray.map((project, index) =>
          <ProjectCard
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
            live={project.live}
      />
      )}
      </div>
    </div>
  );
}
