import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './homepage';
import About from './about';
import Contact from './contact';
import Resume from './resume';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const Main = () => (
  <Route render={({location}) => (
    <TransitionGroup>
    <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
              >
      <Switch location={location}>
        <Route exact path="/Portfolio_ReactJS/" component={HomePage} />
        <Route path="/Portfolio_ReactJS/about" component={About} />
        <Route path="/Portfolio_ReactJS/resume" component={Resume} />
        <Route path="/Portfolio_ReactJS/contact" component={Contact} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
  )}/>
)

export default Main;
