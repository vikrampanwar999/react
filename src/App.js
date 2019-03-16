import React, { Component } from 'react';

import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';
import NavBar from './navbar';
import Posts from './posts';

class App extends Component {
  render() {
    return (
      <div >
        <AppBar color="primary" position="static">
        <Toolbar>
          <Typography varient="title" color="inherit">
            VIKRAM'S
          </Typography>
          <NavBar ></NavBar>
          
          
        </Toolbar>
        
        
        </AppBar>
        <Posts></Posts>
      </div>
    );
  }
}

export default App;
