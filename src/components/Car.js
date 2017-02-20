import React, { Component } from 'react';
import './Car.css';

class Car extends Component {
  render() {
    return (
      <div className="car">
        <span className="body"></span>
        <span className="top"></span>
        <span className="left-line"></span>
        <span className="right-line"></span>
        <span className="left-bumper"></span>
        <span className="right-bumper"></span>
        <span className="left-wheel"></span>
        <span className="right-wheel"></span>
        <span className="front-light"></span>
        <span className="rear-ligth"></span>
      </div>
    );
  }
}

export default Car;
