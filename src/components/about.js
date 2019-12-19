import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Typist from 'react-typist';

class About extends Component{
  render(){
    return(
        <div>
            <Grid className="content" style={{paddingLeft: '270px'}}>
            <Cell className="about-cell-grid" col={12}>
                <div>
                <Typist cursor={{ show: false }} avgTypingDelay={30}>
                    <h4>public class Jerry{'{'}</h4>
                    <h4 style={{paddingLeft: '80px'}}>int age = 24;</h4>
                    <h4 style={{paddingLeft: '80px'}}>location: 'Dacula, Georgia'</h4>
                    <h4 style={{paddingLeft: '80px'}}>String nationality = "American";</h4>
                    <h4 style={{paddingLeft: '80px'}}>String ethnicity = "Korean";</h4>
                    <br/>
                    <h4 style={{paddingLeft: '80px'}}>String university = "University of Georgia, Athens, GA";</h4>
                    <h4 style={{paddingLeft: '80px'}}>String degree = "Bachelor of Science in Computer Science"; </h4>
                    <br/>
                    <h4 style={{paddingLeft: '80px'}}>sports: ['Basketball', 'Soccer', 'Ping Pong'];</h4>
                    <h4 style={{paddingLeft: '80px'}}>hobbies: ['Guitar', 'Cooking', 'Singing'];</h4>
                    <h4 style={{paddingLeft: '80px'}}>{'};'}</h4>
                </Typist>
                </div>
            </Cell>
            </Grid>
        </div>
    )
  }
}

export default About;