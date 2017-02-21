import React, { Component } from 'react';
import { HuePicker } from 'react-color';

class Configurator extends Component {
    render() {
        const { store } = this.context;
        const { carBrands, bodyColor } = store.getState();

        return (
            <div className="configurator">
                <HuePicker color={bodyColor}
                    onChangeComplete={this.handleChangeComplete.bind(this)} />
                {JSON.stringify(carBrands)}
            </div>
        );
    }

    handleChangeComplete(color) {
        const { store } = this.context;
        store.dispatch({ type: 'SET_CAR_BODY_COLOR', value: color.hex });
    }
}

Configurator.contextTypes = {
    store: React.PropTypes.object
};

export default Configurator;
