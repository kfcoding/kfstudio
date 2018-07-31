import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Toolbox from './components/Toolbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Toolbox style={{position: 'fixed', bottom: 0}}/>
      </div>
    );
  }
}

export default App;
