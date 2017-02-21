import React, { Component } from 'react';
import Car from '../components/Car';
import Configurator from './Configurator';
import './App.css';

class App extends Component {
    render() {
        const { store } = this.context;
        const { bodyColor } = store.getState();

        return (
            <div className="app">
                <div className="header">
                    <h2>Welcome to the Car Configuration editor</h2>
                </div>
                <Car bodyColor={bodyColor} />
                <Configurator />
            </div>
        );
    }
}

App.contextTypes = {
    store: React.PropTypes.object
};

export default App;
