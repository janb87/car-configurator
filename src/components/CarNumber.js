import React from 'react';
import './CarNumber.css';

const CarNumber = (props) => {
    return (
        <div className='car-number'>{props.children}</div>
    );
}

export default CarNumber;
