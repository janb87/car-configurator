import React from 'react';
import './Wheel.scss';
import classnames from 'classnames';

const Wheel = (props) => {
    const { rimsType, rimsColor } = props;
    const wheelClasses = classnames(
        'wheel',
        { [`${props.className}`]: !!props.className }
    )
    const rimClasses = classnames(
        'rim',
        `${rimsType}`,
        { [`color-${rimsColor}`]: !!rimsColor }
    );

    return (
        <div className={wheelClasses}>
            <div className={rimClasses} />
        </div>
    );
}

export default Wheel;
