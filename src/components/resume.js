import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Project from './project';

class Resume extends Component{
  render(){
    return(
      <div className="content" style={{position: 'static'}}>
        <Grid>
          <Cell style={{marginLeft: '340px', marginRight:'70px'}} col={8}>
            <div className="resume-right-col">
              <h2 style={{paddingLeft: '13px'}}>Education</h2>
              <hr className="hr-animation"/>
              <Education
                startYear="Aug 2015"
                endYear="Dec 2018"
                schoolName="University of Georgia, Athens, GA"
                degreeDescription="Bachelor of Science in Computer Science"/>

              <h2 style={{paddingLeft: '13px'}}>Skills</h2>
              <hr className="hr-animation"/>
              <ul>
                <li>Languages: Java, Swift, JavaScript, SQL [PostgreSQL, SQLite, MySQL], Python, C, C++</li>
                <li>Technologies/Libraries: React, GitHub, Node.js, UNIX/Linux, Hibernate</li>
                <li>Markup/Templating: HTML, CSS, WordPress</li>
                <li>Cloud Technologies: Google [Firebase, FireStore, App Engine], AWS [EC2, Route 53]</li>
                <li>Computer: Microsoft Office [Word, PowerPoint], Operating System [Windows, OSX]</li>
              </ul>

              <h2 style={{paddingLeft: '13px'}}>Projects</h2>
              <hr className="hr-animation"/>
              <Project
                projectName="Point of Sale Development"
                projectTeam="Team Project"
                startYear="June 2019"
                endYear="Present"
                projectMaterial="(Swift, Cocoa Pods, Xcode, Google FireStore, Github)"
                projectDescription="(Project Management) Created User Stories in Pivotal Tracker to track Sprint objectives and define clear Acceptance Criteria following standard Agile practices."
                projectDescription2="(Development) Developed multiple forms to handle user input in Swift to store item information in Google Firebase’s non-relational database Developed a login flow utilizing Google Firebase Authentication. Implemented a service layer to interact with 3rd party printer hardware to print receipts."/>
              <Project
                projectName="Stock Searcher"
                projectTeam="Personal Project"
                startYear="May 2019"
                endYear="June 2019"
                projectMaterial="(Python, Google Cloud Platform, Flask-API)"
                projectDescription="(Development) Stock data is grabbed using web-scrapping from the Nasdaq and MarketWatch website and built with Python and Flask."
                projectDescription2="(Deployment) Deployed a real-time stock data API on Google Cloud App Engine. "/>
              <Project
                projectName="ReactJS Portfolio"
                projectTeam="Personal Project"
                startYear="Dec 2019"
                endYear="Dec 2019"
                projectMaterial="(ReactJS, HTML, CSS, Node.js, DevTool)"
                projectDescription="(Development) Created a ReactJS Portfolio that contains Responsive Components and Animated Elements."
                projectDescription2="(Deployment) Deployed on Github Page."/>
              <Project
                projectName="State Capitals Quiz"
                projectTeam="School Team Project"
                startYear="Oct 2018"
                endYear="Sep 2018"
                projectMaterial="(Android Studio, Java, SQLite, XML)"
                projectDescription="(Project Management) Written Documentation of User Stories on Google Doc."
                projectDescription2="(Development) Developed an Android Application that quizzes user on capitals of 5 randomly-picked states and saves the quiz result locally by SQLite. User has access to view 5 recent quiz results."/>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;