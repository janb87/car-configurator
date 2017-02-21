import React from 'react';
import Car from '../components/Car';
import ConfigurationPanel from './ConfigurationPanel';
import './App.css';

const App = (props, context) => {
    const { store } = context;
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

App.contextTypes = {
    store: React.PropTypes.object
};

export default App;
