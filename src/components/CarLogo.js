import React from 'react';
import './CarLogo.css';

const CarLogo = (props) => {
    const { carBrand, imageUrl } = props;
    return (
        <div className='car-logo'><img src={imageUrl} alt={carBrand} /></div>
    );
}

export default CarLogo;
