import React from 'react';
import './App.css';
import {Content} from 'react-mdl';
import Homepage from './components/homepage';
import Main from './components/main';
import logo from './images/logo2.png';
import email from './images/email.png';
import phone from './images/phone.png';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div style={{height:'100%'}}>
      {/* Side Bar */}
      <div className="sidebar">
        <a href="/"><img src={logo} alt="logo" className="logo-img"/></a>
        <br/>
        <img src="https://media.licdn.com/dms/image/C4E03AQFZEaunz86mvA/profile-displayphoto-shrink_200_200/0?e=1580342400&v=beta&t=P-ZmF4HO9ezMEqe-VXkUKRyW9jqVIjpZVZB6kLltuQw"
                       alt="profile"
                       className="profile-img"/>
        <h4>Sanggyun Jerry Jang</h4>
        <div className="sidebar-contact">
          <img src={email} alt="email" className="icon-img one-line"/>
          <p style={{paddingLeft:'10px'}} className="one-line">goo1140@gmail.com</p>
          <br/>
          <img src={phone} alt="phone" className="icon-img one-line"/>
          <p style={{paddingLeft:'10px'}} className="one-line">(770)756-5552</p>
        </div>
        <div style={{paddingTop:'15px'}}>
          <Link style={{textDecoration: 'none'}} to="/"><p className="nav-link">Home</p></Link>
          <Link style={{textDecoration: 'none'}} to="/resume"><p className="nav-link">Resume</p></Link>
          <Link style={{textDecoration: 'none'}} to="/contact"><p className="nav-link">Contact</p></Link>
        </div>
        <div className="social-links">
          <div className="social-links2">
            {/* LinkedIn Profile */}
            <a className="wiggle3" href="https://www.linkedin.com/in/jerry-jang-b28a9010a/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            {/* Github */}
            <a className="shake-little shake-constant shake-constant--hover" href="https://github.com/goo951019" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a><br/>
          </div>
          <div className="social-links2">
            {/* FreeCodeCamp */}
            <a className="wiggle" href="https://www.freecodecamp.org/goo1140" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-free-code-camp" aria-hidden="true" />
            </a>
            {/* Instagram */}
            <a className="wiggle2" href="https://www.instagram.com/s._gratia/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a><br/>
          </div>
        </div>
      </div>
      
      <Content style={{zIndex:'-1'}} className='body-background'>
          <Main/>
      </Content>

    </div>
  );
}

export default App;
