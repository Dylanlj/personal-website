import React, { Component } from 'react';
import hand from '../assets/images/art/hand.png'
import pumpkin from '../assets/images/art/pumpkin.png'
import voremin from '../assets/images/art/voremin.png'
import punk from '../assets/images/art/punk.png'
import blackberry from '../assets/images/art/blackberry.png'
import cosmic from '../assets/images/art/cosmic.jpg'
import chatty from '../assets/images/projects/chatty.png'
import foursquare from '../assets/images/projects/foursquare.png'
import homecooked from '../assets/images/projects/homecooked.png'
import midterm from '../assets/images/projects/midterm.png'


class Content extends Component {



  render() {
    return (
      <div className="content">
        <div className="art-content content-container">
          <h2> ART </h2>
          <img src={hand} className="one drawing" onClick={this.props.toggleModal.bind(this)} alt="hand drawing"/>
          <img src={pumpkin} className="two drawing" onClick={this.props.toggleModal.bind(this)} alt="pumpkin drawing"/>
          <img src={voremin} className="three drawing" onClick={this.props.toggleModal.bind(this)} alt="voremin drawing"/>
          <img src={punk} className="four drawing" onClick={this.props.toggleModal.bind(this)} alt="punk drawing"/>
          <img src={blackberry} className="five drawing" onClick={this.props.toggleModal.bind(this)} alt="blackberry drawing"/>
          <img src={cosmic} className="six drawing" onClick={this.props.toggleModal.bind(this)} alt="cosmic drawing"/>
        </div>
        <div className='project-content content-container'>
          <h2> PROJECTS </h2>

            <a href="https://github.com/Dylanlj/chatty-app">
              <img src={chatty} alt="chatty project"/>
              </a>
            <a href="https://dylan-foursquare.herokuapp.com/">
              <img src={foursquare} alt="foursquare project"/>
              </a>
            <a href=" https://serene-woodland-26435.herokuapp.com/">
              <img src={homecooked} alt="homecooked project"/>
              </a>
            <a href="https://github.com/bartnic1/pickupOrderingMidterm">
              <img src={midterm} alt="midterm project"/>
              </a>
        </div>
      </div>
    );
  }
}

export default Content;
