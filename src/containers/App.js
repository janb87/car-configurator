import React from 'react';
import Car from '../components/Car';
import ConfigurationPanel from './ConfigurationPanel';
import './App.css';

const App = (props, context) => {
    const { store } = context;
    const { bodyColor, sideNumber, rimsType, rimsColor, selectedCarBrand, carBrands } = store.getState();
    const matchingCarBrands = carBrands.filter(br => br.make === selectedCarBrand);
    let carBrandImageUrl = null;
    if (matchingCarBrands.length > 0) {
        carBrandImageUrl = matchingCarBrands[0].logoUrl;
    }

    return (
        <div className="app">
            <header className="header">
                <h2>Welcome to the Car Configurator!</h2>
            </header>
            <main>
                <section className="car-view">
                    <Car bodyColor={bodyColor}
                        sideNumber={sideNumber}
                        rimsType={rimsType} rimsColor={rimsColor}
                        carBrand={selectedCarBrand}
                        carBrandImageUrl={carBrandImageUrl}
                    />
                </section>
                <ConfigurationPanel />
            </main>
        </div>
    );
}

App.contextTypes = {
    store: React.PropTypes.object
};

export default App;
