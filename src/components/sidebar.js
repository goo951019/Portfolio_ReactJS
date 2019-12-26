import React, {Component} from 'react';
import '../App.css';
import logo from '../images/logo2.png';
import email from '../images/email.png';
import phone from '../images/phone.png';
import resume from '../downloads/Resume.pdf';
import {Link} from 'react-router-dom';

class Sidebar extends Component{
    render(){
        return(
        <div className="sidebar fancy-font">
            <Link to="/Portfolio_ReactJS/"><img src={logo} alt="logo" className="logo-img"/></Link>
            <br/>
            <img src="https://media.licdn.com/dms/image/C4E03AQFZEaunz86mvA/profile-displayphoto-shrink_200_200/0?e=1580342400&v=beta&t=P-ZmF4HO9ezMEqe-VXkUKRyW9jqVIjpZVZB6kLltuQw"
                        alt="profile"
                        className="profile-img"/>
            <h4 className="fancy-font name">Sanggyun Jerry Jang</h4>
            <div className="sidebar-contact">
                <img src={email} alt="email" className="icon-img one-line"/>
                <p style={{paddingLeft:'10px'}} className="one-line">goo1140@gmail.com</p>
                <br/>
                <img src={phone} alt="phone" className="icon-img one-line"/>
                <p style={{paddingLeft:'10px'}} className="one-line">(770)756-5552</p>
            </div>
            <div className="nav-link-holder" style={{paddingTop:'15px'}}>
                <Link style={{textDecoration: 'none'}} to="/Portfolio_ReactJS/about"><p className="nav-link">About</p></Link>
                <Link style={{textDecoration: 'none'}} to="/Portfolio_ReactJS/resume"><p className="nav-link">Resume</p></Link>
                <Link style={{textDecoration: 'none'}} to="/Portfolio_ReactJS/contact"><p className="nav-link">Contact</p></Link>
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
                <br/>
                <a href={resume} download="Jerry's Resume.pdf" style={{textDecoration: 'none'}}>
                    <p className="nav-link">Download Resume</p>
                </a>
            </div>
        </div>
        )
  }
}

export default Sidebar;