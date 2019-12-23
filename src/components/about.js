import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Typist from 'react-typist';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UGA from '../images/ugaLogo.png'
import Graduation from '../images/graduation.jpg'
import Hiking from '../images/stoneMtn.jpg'

class About extends Component{
    render(){
        return(
            <div className="content">
                <Grid>
                    <Cell style={{marginLeft: '60px'}} col={8}>
                        <div className="about-box fancy-font">
                            <Typist cursor={{ show: false }} avgTypingDelay={140}>
                                <h2 className="fancy-font" style={{paddingLeft: '13px'}}>About</h2>
                            </Typist>
                            <hr className="hr-animation"/>
                            <div style={{width: '70%',display: 'inline-block'}}>
                                <Tabs>
                                    <TabList>
                                        <Tab>Java</Tab>
                                        <Tab>JavaScript</Tab>
                                        <Tab>SQL</Tab>
                                        <Tab>Python</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <Typist cursor={{ show: false }} avgTypingDelay={10}>
                                            <h5 className="fancy-font">public class Jerry &#123;</h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>String position = "Software Engineer";</h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>String location = "Dacula, Georgia";</h5>
                                            <br/>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>String university = "University of Georgia, Athens, GA";</h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>String degree = "B.S. in Computer Science"; </h5>
                                            <br/>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>String[] sports = &#123; 'Basketball', 'Soccer', 'Ping Pong' &#125;;</h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>String[] hobbies = &#123; 'Guitar', 'Cooking', 'Hiking' &#125;;</h5>
                                            <h5 className="fancy-font">&#125;</h5>
                                        </Typist>
                                    </TabPanel>
                                    <TabPanel>
                                        <Typist cursor={{ show: false }} avgTypingDelay={10}>
                                                <h5 className="fancy-font">var Jerry = &#123;</h5>
                                                <h5 className="fancy-font" style={{paddingLeft: '40px'}}>position: 'Software Engineer',</h5>
                                                <h5 className="fancy-font" style={{paddingLeft: '40px'}}>location: 'Dacula, Georgia',</h5>
                                                <br/>
                                                <h5 className="fancy-font" style={{paddingLeft: '40px'}}>university: 'University of Georgia, Athens, GA',</h5>
                                                <h5 className="fancy-font" style={{paddingLeft: '40px'}}>degree: 'B.S. in Computer Science', </h5>
                                                <br/>
                                                <h5 className="fancy-font" style={{paddingLeft: '40px'}}>sports: ['Basketball', 'Soccer', 'Ping Pong'],</h5>
                                                <h5 className="fancy-font" style={{paddingLeft: '40px'}}>hobbies: ['Guitar', 'Cooking', 'Hiking']</h5>
                                                <h5 className="fancy-font">&#125;;</h5>
                                        </Typist>
                                    </TabPanel>
                                    <TabPanel>
                                        <Typist cursor={{ show: false }} avgTypingDelay={10}>
                                            <h5 className="fancy-font">SELECT * FROM world</h5>
                                            <h5 className="fancy-font">WHERE</h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>fname = 'Jerry' AND lname = 'Jang'</h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>position = 'Software Engineer' AND </h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>location = 'Dacula, Georgia' AND</h5>
                                            <br/>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>university = 'UGA, Athens, GA' AND</h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>degree = 'B.S. in Computer Science' AND</h5>
                                            <br/>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>sports IN ('Basketball', 'Soccer', 'Ping Pong') AND</h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>hobbies IN ('Guitar', 'Cooking', 'Hiking')</h5>
                                        </Typist>
                                    </TabPanel>
                                    <TabPanel>
                                        <Typist cursor={{ show: false }} avgTypingDelay={10}>
                                            <h5 className="fancy-font">class Jerry (object):</h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>position = "Software Engineer"</h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>location = "Dacula, Georgia"</h5>
                                            <br/>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>university = "UGA, Athens, GA"</h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>degree = "B.S. in Computer Science"</h5>
                                            <br/>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>sports = ['Basketball', 'Soccer', 'Ping Pong']</h5>
                                            <h5 className="fancy-font" style={{paddingLeft: '40px'}}>hobbies = ['Guitar', 'Cooking', 'Hiking']</h5>
                                        </Typist>
                                    </TabPanel>
                                </Tabs>
                            </div>
                            <div style={{width: '200px', display: 'inline-block', position: 'absolute', paddingTop: '20px',textAlign:'center'}}>
                                <p className="italic">hover over pics</p>
                                <div className="img-container" style={{alignItem:'center'}}>
                                    <img width="180" height="115" src={UGA} alt="ugaLogo"/>
                                    <div className="img-overlay">
                                        <img width="180" height="125" src={Graduation} alt="graduation"/>
                                    </div>
                                </div>
                                <div className="msg-container" style={{alignItem:'center'}}>
                                    <img width="180" height="170" src={Hiking} alt="Hiking" style={{paddingTop: '20px'}}/>
                                    <div class="msg-overlay">
                                        <div class="text">Taken at Stone Mountain</div>
                                    </div>
                                </div>
                                <iframe width="200" height="115" style={{paddingTop: '20px'}} 
                                        src="https://www.youtube.com/embed/uInyi1jLg6o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;