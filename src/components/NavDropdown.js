import React, {Component} from 'react';
import styles from './navdropdown.module.css';

export default class NavDropdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: this.props.mounted,
      style: {
        opacity: 0,
        transition: 'all 2s ease'
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.mounted) {
      this.unMountStyle()
    } else {
      this.setState({
        show: true
      })
      setTimeout(this.mountStyle, 10)
    }
  }

  unMountStyle = () => {
    this.setState({
      style: {
        opacity: 0,
        transition: 'all 1s ease'
      }
    })
  }

  mountStyle = () => {
    this.setState({
      style: {
        opacity: 1,
        transition: 'all 1s ease'
      }
    })
  }

  componentDidMount(){
    setTimeout(this.mountStyle, 10)
  }

  transitionEnd = () => {
    if (!this.props.mounted) {
      this.setState({
        show: false
      })
    }
  }
  render(){
    return(
      this.state.show && <div style={this.state.style} onTransitionEnd={this.transitionEnd}>
        <div className={styles.dropdownContainer}>
          <a href='#home'>Home</a>
          <a href='#work'>Work</a>
          <a href='#contact'>Contact</a>

            <a className={styles.closeButton} onClick={this.props.onButtonClick}>Close</a>

        </div>

      </div>
    )
  }
}
