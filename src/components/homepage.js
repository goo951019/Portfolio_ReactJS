import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Typist from 'react-typist';

class HomePage extends Component{
  render(){
    return(
      <div>
        <Grid className="content">
          <Cell className="home-cell-grid" col={12}>
            <div>
              <Typist cursor={{ show: false }} avgTypingDelay={80}>
                  <h1 className="fancy-font">Hi, I'm Jerry
                  <br/><br/>Nice to see you 😄</h1>
              </Typist>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default HomePage;
