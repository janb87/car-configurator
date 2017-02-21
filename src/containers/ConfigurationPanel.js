import React, { Component } from 'react';
import { HuePicker, CirclePicker } from 'react-color';
import './ConfigurationPanel.css';
import Rim from '../components/Rim';

class ConfigurationPanel extends Component {
    render() {
        const { store } = this.context;
        const { carBrands, bodyColor, rimsType, rimsColor, sideNumber, selectedCarBrand } = store.getState();
        const rimStyles = ['basic', 'star', 'cross'];
        const rimColors = ['#c0c0c0', '#808080', '#000000', '#ffd700', '#ff0000'];

        return (
            <section className='configuration-panel'>
                <h2>Car brand</h2>
                <div className='car-brands'>
                    {carBrands.map((carBrand, index) => {
                        const className = carBrand.make === selectedCarBrand ? 'selected' : '';
                        return (<img className={className} key={index} alt={carBrand.make} src={carBrand.logoUrl} onClick={() => {
                            this.onCarBrandClick(carBrand.make);
                        }} />)
                    })}
                </div>
                <hr />
                <h2>Body color</h2>
                <HuePicker color={bodyColor}
                    onChangeComplete={this.onBodyColorChange.bind(this)} />
                <hr />
                <h2>Rims style</h2>
                <div className='rim-styles'>
                    {rimStyles.map((rimStyle, index) => {
                        const className = rimStyle === rimsType ? 'selected' : '';
                        return (<div key={index} className={className}><Rim rimStyle={rimStyle} color={rimsColor} /></div>);
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
        const { store } = this.context;
        store.dispatch({ type: 'SET_CAR_BODY_COLOR', value: color.hex });
    }

    onRimsColorChange(color) {
        const { store } = this.context;
        store.dispatch({ type: 'SET_CAR_RIMS_COLOR', value: color.hex.substring(1) });
    }

    onCarBrandClick(carBrand) {
        const { store } = this.context;
        store.dispatch({ type: 'SELECT_CAR_BRAND', value: carBrand });
    }

    onSideNumberChange(event) {
        const sideNumber = event.target.value;
        const { store } = this.context;
        store.dispatch({ type: 'SET_CAR_SIDE_NUMBER', value: sideNumber });
    }
}

ConfigurationPanel.contextTypes = {
    store: React.PropTypes.object
};

export default ConfigurationPanel;
