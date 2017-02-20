import React, { Component } from 'react';
import './Car.css';

/**
 * TODO: 
 * 1. Split in components
 * 2. Add some animations to the car
 */
class Car extends Component {
  render() {
    return (
      <div className="car">
        <span className="body">
          <span className="top">
            <span className="top-line front" />
            <span className="top-line rear" />
          </span>
          <span className="bumper front"></span>
          <span className="bumper rear"></span>
          <span className="wheel front">
            <span className="rim"/>
          </span>
          <span className="wheel rear">
            <span className="rim"/>
          </span>
          <span className="light front"></span>
          <span className="light rear"></span>
        </span>
      </div>
    );
  }
}

export default Car;
