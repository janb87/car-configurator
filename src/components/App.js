import React, { Component } from 'react';
import Car from './Car';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>Welcome to the Car Configuration editor</h2>
        </div>
        <Car/>
      </div>
    );
  }
}

export default App;
