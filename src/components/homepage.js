import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl'
import Typical from 'react-typical'

class HomePage extends Component{
  render(){
    return(
      <div>
        <Grid className="content" style={{paddingLeft: '270px'}}>
          <Cell className="home-cell-grid" col={12}>
            <div>
              <Typical
                steps={['Welcome', 1000,
                        'Welcome to My Playground.', 1500,
                        'I\'m Jerry', 1000,
                        'I\'m Jerry, Software Engineer.', 5000
                      ]}
                loop={Infinity}
                wrapper="h1"
              />
              <Typical
                steps={['안녕', 1000,
                        '안녕, 만나서 반가워.', 2800,
                        '난 제리야', 1750,
                        '난 제리야, 소프트웨어 엔지니어지.', 5700
                      ]}
                loop={Infinity}
                wrapper="h1"
              />
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default HomePage;
