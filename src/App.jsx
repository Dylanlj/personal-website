import React, { Component } from 'react';
import './App.css';
import FrontPage from './front-page/front-page.jsx';
import AboutMe from './about-me/about-me.jsx';
import Projects from './projects/projects.jsx';
import Resume from './resume/resume.jsx';
import Art from './art/art.jsx';
import Sidebar from './side-bar.jsx';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      page: "front-page-link",
      modalBackground: false
    }
  }

  pageChange = (event) => {
    this.setState({page: event.target.className})
  }

  toggleModal = (event) => {
    let modal = this.state.modalBackground


    if (modal) {
      document.getElementById('modal').id = ''
      this.setState({modalBackground: false})
    } else {
      event.target.id = "modal"
      this.setState({modalBackground: <div className="modal-background" onClick={this.toggleModal}/>
      })

    }
  }

  render() {
    let page;
    switch(this.state.page) {
      case "front-page-link":
        page = <FrontPage
          toggleModal={this.toggleModal}
        />
        break;
      case "art-link":
        page = <Art/>
        break;
      case "projects-link":
        page = <Projects/>
        break;
      case "about-link":
        page = <AboutMe/>
        break;
      case "resume-link":
        page = <Resume/>
        break;
      default:
        page = <FrontPage/>
    }

    return (
      <div className="App">
        {page}
        {this.state.modalBackground}
        <div className="divider"/>
        <Sidebar
          pageChange = {this.pageChange}
        />
      </div>
    );
  }
}

export default App;
