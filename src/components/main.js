import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './homepage';
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
        <Route exact path="/" component={HomePage} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
  )}/>
)

export default Main;
