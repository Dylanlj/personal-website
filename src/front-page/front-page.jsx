import React, { Component } from 'react';

import Bio from './bio.jsx';
import Content from './content.jsx';
import Graphic from './graphic.jsx';

class FrontPage extends Component {
  render() {
    return (
      <div className="front-page">
        <h2>Dylan Lam-Johnson</h2>
        <Graphic/>
        <Bio/>
        <Content
          toggleModal={this.props.toggleModal}
        />
      </div>
    );
  }
}

export default FrontPage;
