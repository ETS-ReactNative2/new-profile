import React from 'react';
import styles from './projects.module.css';
import ProjectCard from './ProjectCard.js'
import ozone1 from './assets/ozone1.png'
import commongood from './assets/commongood.png'
import canyons from './assets/canyons.png'
import goblin from './assets/goblin-exploder.png'
import map from './assets/map.png'
import newBuydown from './assets/new-buydown.png'
import calculate from './assets/calculate.png'

export default function Projects(){
  const projectArray = [
    {
      name: "Community Event",
      description: "Community Grand Opening is a typical landing page buildout for a community event - Built with Bootstrap 4, jQuery, Gulp.",
      image: {canyons},
    link: 'https://www.taylormorrison.com/new-homes/florida/orlando/clermont/highland-ranch-community/grand-opening',
  live: true},
  {
    name: 'Mortgage Calculator',
    description: "Mortgage Calculator is a promotional web app that allows the user to filter through communities, input their interest and down payment and calculate the monthly payment for a variety of homes - Built with jQuery, Bootstrap 3, SCSS, Gulp.",
    image: {calculate},
    link: 'https://www.taylormorrison.com/2-1-buydown-program/calculate-mortgage?div=38',
    live: true,
  },
  {name: "2/1 Buydown",
    description: "2/1 Buydown is a promotional landing page with an iframed Pardot form setup. User selects a community which is cached and passed on linking out to Mortgage Calculator - Built with jQuery, Bootstrap 3, Pardot.",
    image: {newBuydown},
  link: 'https://www.taylormorrison.com/2-1-buydown-program',
live: true,
},
{
  name: 'Maps Alternative',
  description: 'Maps Alternative is a static map set up intended to mimic Google Maps styling - Built with jQuery, Bootstrap, PHP.',
  image: {map},
  link: 'https://frederickamanor.org/',
  live: true,
},
{
  name: 'Goblin Exploder',
  description: 'Goblin Exploder is a "Tower defense" style game - Built with React, Styled Components, React-dnd, React Sound.',
  image: {goblin},
  link: 'http://goblin-exploder.surge.sh/',
  live: true

},
    {
    name: 'Ozone',
    description: 'Ozone is a Portland area rock climbing guidebook app - Built with React/Redux/Firebase.',
    image: {ozone1},
    link: 'https://github.com/1stBoltCrux/capstone-UI/blob/master/README.md'

  },
  {
    name: 'Common Good',
    description: 'Common Good is a UI/Design mockup for a shared space website with custom art and icons - Built with Sketch.',
    image: {commongood},
    link: 'https://github.com/1stBoltCrux/shared-space'

  },


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
            key={index}
          />
        )}
      </div>
      <div className={styles.aboutMe}>
        I am a web developer out of Portland, OR. My work has me dipping into a lot of different areas from day to day. I'm building landing pages in Jquery/Bootstrap/sass/Gulp, maintaining/expanding internal back-end tools in Node.js and diving into the expansive world of AWS (Serverless in particular) from time to time. Outside of that I like to keep up on all things React, my preferred framework for personal projects.
      </div>
    </div>
  );
}
