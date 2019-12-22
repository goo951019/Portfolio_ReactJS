import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component{
  render(){
    return(
      <Grid>
        <Cell col={9}>
          <h4 className="fancy-font" style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <ul style={{marginTop:'-10px', fontSize:"15px"}}>
            <li>{this.props.degreeDescription}</li>
            <li>Related Course Work</li>
              <ul className="two-column-list" style={{fontSize:'15px'}}>
                <li>Software Engineering</li>
                <li>Web Programming</li>
                <li>Database Management</li>
                <li style={{marginLeft: '30px'}}>Mobile Development</li>
                <li style={{marginLeft: '30px'}}>Computer Networks</li>
              </ul>
          </ul>
        </Cell>
        <Cell className="italic" col={3}>
          <p style={{fontSize:'15px'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;