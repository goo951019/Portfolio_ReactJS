import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Typist from 'react-typist';
import {Link} from 'react-router-dom';

class HomePage extends Component{
  render(){
    return(
      <div>
        <Grid className="content">
          <Cell className="home-cell-grid" col={12}>
            <div>
              <Typist cursor={{ show: false }} avgTypingDelay={80}>
                  <h1 className="fancy-font mobile-font">Hi, I'm Jerry
                  <br/><br/>Nice to see you 😄</h1>
                  <br/>
                  <Link to="/Portfolio_ReactJS/about">
                    <button style={{fontSize: '15px'}} className="fancy-font wiggle btn">More about me</button>
                  </Link>
              </Typist>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default HomePage;
