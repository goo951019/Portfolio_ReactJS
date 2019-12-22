import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Project extends Component{
  render(){
    return(
      <Grid>
        <Cell col={9}>
          <h4 className="fancy-font" style={{marginTop:'0px'}}>{this.props.projectName}</h4>
          <p style={{marginTop:'-20px', fontSize:'15px'}}>{this.props.projectMaterial}</p>
          <ul style={{marginTop:'-10px', fontSize:'15px'}}>
            <li>{this.props.projectDescription}</li>
            <li>{this.props.projectDescription2}</li>
          </ul>
        </Cell>
        <Cell className="italic" col={3}>
          <p style={{marginTop:'5px', fontSize:'15px'}}>{this.props.projectTeam}</p>
          <p style={{marginTop:'-17px', fontSize:'15px'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Project;