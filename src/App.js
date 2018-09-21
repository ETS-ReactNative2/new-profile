import React, { Component } from 'react';
import Nav from './components/Nav.js'
import TitleContainer from './components/TitleContainer.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import styles from './App.module.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      windowSize: window.innerWidth
    }
  }
  componentDidMount(){
    window.addEventListener('resize', this.handleSize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleSize)
}

handleSize = () => {
  console.log(window.innerWidth);
  this.setState({
    windowSize: window.innerWidth
  })
}

  render() {
    return (
      <div className="app-wrapper">
        <Nav/>
        <TitleContainer windowSize={this.state.windowSize}/>
        <AboutMe/>
        <Projects/>
      <Footer/>
      </div>
    );
  }
}

export default App;
