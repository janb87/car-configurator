import React, { Component } from 'react';
import CarNumber from './CarNumber';
import Wheel from './Wheel';
import CarLogo from './CarLogo';
import './Car.scss';

class Car extends Component {
    render() {
        const { bodyColor, sideNumber, rimsType, rimsColor, carBrand, carBrandImageUrl } = this.props;

        const bodyStyle = {
            backgroundColor: bodyColor
        };
        const topStyle = {
            borderColor: bodyColor
        };

        return (
            <div className='car'>
                <div className='body' style={bodyStyle}>
                    <div className='top' style={topStyle}>
                        <div className='top-line front' style={topStyle} />
                        <div className='top-line rear' style={topStyle} />
                    </div>
                    <div className='bumper front'></div>
                    <div className='bumper rear'></div>
                    <div className='light front'></div>
                    <div className='light rear'></div>
                    <CarNumber>{sideNumber}</CarNumber>
                    <CarLogo carBrand={carBrand} imageUrl={carBrandImageUrl} />
                </div>
                <Wheel className='front' rimsType={rimsType} rimsColor={rimsColor} />
                <Wheel className='rear' rimsType={rimsType} rimsColor={rimsColor} />
                <div className='shadow' />
            </div>
        );
    }
}

export default Car;
