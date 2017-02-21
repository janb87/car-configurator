import React, { Component } from 'react';
import './Rim.css';

class Rim extends Component {
    render() {
        const { rimStyle, color } = this.props;

        return (
            <div className={`rim ${rimStyle} color-${color}`} />
        );
    }
}

export default Rim;
