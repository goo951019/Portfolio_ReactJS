import React from 'react';
import './App.css';
import {Content} from 'react-mdl';
import Main from './components/main';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div style={{height:'100%', width:'100%'}}>
      <Sidebar/>
      <Content style={{zIndex:'0'}} className='body-background'>
          <Main/>
      </Content>
    </div>
  );
}

export default App;
