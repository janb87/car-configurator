import React, { Component } from 'react';
import Car from '../components/Car';
import ConfigurationPanel from './ConfigurationPanel';
import './App.css';

class App extends Component {
    render() {
        const { store } = this.context;
        const { bodyColor, sideNumber } = store.getState();

        return (
            <div className="app">
                <header className="header">
                    <h2>Welcome to the Car Configuration editor</h2>
                </header>
                <main>
                    <Car bodyColor={bodyColor} sideNumber={sideNumber} />
                    <ConfigurationPanel />
                </main>
            </div>
        );
    }
}

App.contextTypes = {
    store: React.PropTypes.object
};

export default App;
