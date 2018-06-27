import React, { Component } from 'react';


class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="divider"/>
        <div className="links">
          <div className="front-page-link" onClick={this.props.pageChange}> Home </div>
          <div className="project-link" onClick={this.props.pageChange}> Projects </div>
          <div className="art-link" onClick={this.props.pageChange}> Art </div>
          <div className="resume-link" onClick={this.props.pageChange}> Resume </div>
          <div className="about-link" onClick={this.props.pageChange}> About Me </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
