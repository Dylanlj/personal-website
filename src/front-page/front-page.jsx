import React, { Component } from 'react';
import Sidebar from './side-bar.jsx';
import Bio from './bio.jsx';
import Content from './content.jsx';

class FrontPage extends Component {
  render() {
    return (
      <div className="front-page">
        <h2>Dylan Lam-Johnson</h2>
        <Bio/>
        <Content/>
        <Sidebar />
      </div>
    );
  }
}

export default FrontPage;
