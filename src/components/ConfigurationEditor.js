import React, { Component } from 'react';
import { HuePicker, CirclePicker } from 'react-color';
import './ConfigurationEditor.scss';
import Wheel from '../components/Wheel';
import { setCarBodyColor, setCarRimsColor, selectCarBrand, setCarSideNumber, setCarRimsType } from '../actions/actionCreators';

class ConfigurationEditor extends Component {
    render() {
        const { carBrands, bodyColor, rimsType, rimsColor, sideNumber, selectedCarBrand } = this.props;
        const rimStyles = ['basic', 'star', 'cross'];
        const rimColors = ['#c0c0c0', '#808080', '#ffd700', '#ff0000'];

        return (
            <section className='configuration-editor'>
                <h2>Car brand</h2>
                <div className='car-brands'>
                    {carBrands.map((carBrand, index) => {
                        const className = carBrand.make === selectedCarBrand ? 'selected' : '';
                        return (<img className={className} key={index} alt={carBrand.make} src={carBrand.logoUrl} onClick={() =>
                            this.onCarBrandClick(carBrand.make)
                        } />)
                    })}
                </div>
                <hr />
                <h2>Body color</h2>
                <HuePicker color={bodyColor}
                    onChangeComplete={this.onBodyColorChange.bind(this)} />
                <hr />
                <h2>Rims type</h2>
                <div className='rim-styles'>
                    {rimStyles.map((rimStyle, index) => {
                        const className = rimStyle === rimsType ? 'selected' : '';
                        return (
                            <div key={index} className={className} onClick={() => this.onRimsTypeChange(rimStyle)}>
                                <Wheel rimsType={rimStyle} rimsColor={rimsColor} />
                            </div>
                        );
                    })}
                </div>
                <hr />
                <h2>Rims color</h2>
                <CirclePicker color={rimsColor} colors={rimColors}
                    onChangeComplete={this.onRimsColorChange.bind(this)} />
                <hr />
                <h2>Number on the side</h2>
                <input type='number' max='99' min='0' value={sideNumber} onChange={this.onSideNumberChange.bind(this)} />
            </section>
        );
    }

    onBodyColorChange(color) {
        const { dispatch } = this.props;
        dispatch(setCarBodyColor(color.hex));
    }

    onRimsColorChange(color) {
        const { dispatch } = this.props;
        dispatch(setCarRimsColor(color.hex));
    }

    onCarBrandClick(carBrand) {
        const { dispatch } = this.props;
        dispatch(selectCarBrand(carBrand));
    }

    onSideNumberChange(event) {
        const sideNumber = event.target.value;
        const { dispatch } = this.props;
        dispatch(setCarSideNumber(sideNumber));
    }

    onRimsTypeChange(rimsType) {
        const { dispatch } = this.props;
        dispatch(setCarRimsType(rimsType));
    }
}

export default ConfigurationEditor;
