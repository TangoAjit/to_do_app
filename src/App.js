import React, { Component } from 'react';
import classes from './App.css';
import Main from './container/Main/Main';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Main/>
      </div>
    );
  }
}

export default App;
