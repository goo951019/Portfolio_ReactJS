import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component{
  render(){
    return(
      <Grid>
        <Cell col={9}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <ul style={{marginTop:'-10px'}}>
            <li>{this.props.degreeDescription}</li>
            <li>Related Course Work</li>
              <ul className="two-column-list">
                <li>Software Engineering</li>
                <li>Web Programming</li>
                <li>Database Management</li>
                <li style={{marginLeft: '30px'}}>Mobile Development</li>
                <li style={{marginLeft: '30px'}}>Computer Networks</li>
              </ul>
          </ul>
        </Cell>
        <Cell className="italic" col={3}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;