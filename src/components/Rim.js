import React from 'react';
import './Rim.css';

const Rim = (props) => {
    const { rimStyle, color } = props;

    return (
        <div className={`rim ${rimStyle} color-${color}`} />
    );
}

export default Rim;
