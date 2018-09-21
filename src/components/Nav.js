import React, {Component} from 'react';
import styles from './nav.module.css';
import NavDropdown from './NavDropdown';

import { Link } from 'react-router'

console.log(styles);

export default class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      windowSize: window.innerWidth,
      navDropdownVisible: false,
      showChild: false
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleSize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleSize)
}

  buttonClick = () => {
    this.setState({
      showChild: !this.state.showChild
    })
  }


  handleSize = () => {
    console.log(window.innerWidth);
    this.setState({
      windowSize: window.innerWidth
    })
  }
  render(){

    let hamburger;

    if (!this.state.showChild) {
      hamburger = <div  onClick={this.buttonClick} className={styles.hamburger}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </div>
    } else {
      hamburger = null;
    }

if (this.state.windowSize > 560) {
  return(
    <div className={styles.navWrapper}>
      <div className={styles.navLinks}>
        <div className={styles.navLinkList}>
          <a href='#home'>Home</a>
          <a href='#aboutme'>About Me</a>
          <a href='#work'>Work</a>
          <a href='#contact'>Contact</a>
        </div>

      </div>
      <div className={styles.navSocial}></div>

    </div>
  )

} else {
  return (
    <div className={styles.navWrapper}>
      <a name='home'/>
      <div className={styles.navLinks}>
        <div className={styles.navLinkList}>
          {hamburger}
        </div>
        <NavDropdown
          onButtonClick={this.buttonClick}
           onTransitionEnd={this.transitionEnd} mounted={this.state.showChild}/>
      </div>
      <div className={styles.navSocial}></div>

    </div>
  )
}
}
}
