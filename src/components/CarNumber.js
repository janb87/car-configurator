import React, { Component } from 'react';
import './CarNumber.css';

class CarNumber extends Component {
    render() {
        return (
            <div className='car-number'>{this.props.children}</div>
        );
    }
}

export default CarNumber;
