import React, { Component } from 'react';
import Rim from './Rim';
import CarNumber from '../components/CarNumber';
import './Car.css';

class Car extends Component {
    render() {
        const { bodyColor, sideNumber } = this.props;

        const bodyStyle = {
            backgroundColor: bodyColor
        };

        return (
            <div className="car">
                <span className="body" style={bodyStyle}></span>
                <span className="top"></span>
                <span className="left-line"></span>
                <span className="right-line"></span>
                <span className="left-bumper"></span>
                <span className="right-bumper"></span>
                <span className="left-wheel">
                </span>
                <span className="right-wheel">
                    <Rim/>
                </span>

                <span className="front-light"></span>
                <span className="rear-ligth"></span>
                <CarNumber>{sideNumber}</CarNumber>
            </div>
        );
    }
}

export default Car;
