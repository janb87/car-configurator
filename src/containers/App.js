import React from 'react';
import Car from '../components/Car';
import ConfigurationPanel from './ConfigurationPanel';
import {connect} from 'react-redux';
import Link from 'redux-first-router-link';
import './App.scss';

const mapStateToProps = (state) => {
    return {...state.reducer, page: state.location.type};
};

const App = (props) => {
    const {bodyColor, sideNumber, rimsType, rimsColor, selectedCarBrand, carBrands, page} = props;
    const matchingCarBrands = carBrands.filter(br => br.make === selectedCarBrand);
    let carBrandImageUrl = null;
    if (matchingCarBrands.length > 0) {
        carBrandImageUrl = matchingCarBrands[0].logoUrl;
    }

    const homePage = () => {
        return (
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
                <section className="view-summary">
                    <Link to="/summary">View summary</Link>
                </section>
            </main>
        );
    };

    const summaryPage = () => {
        return (
            <main>
                <h2>Configuration summary</h2>
                <section className="car-view">
                    <Car bodyColor={bodyColor}
                        sideNumber={sideNumber}
                        rimsType={rimsType} rimsColor={rimsColor}
                        carBrand={selectedCarBrand}
                        carBrandImageUrl={carBrandImageUrl}
                    />
                </section>
                <section className="view-summary">
                    <Link to="/home">Edit configuration</Link>
                </section>
            </main>
        );
    };

    return (
        <div className="app">
            <header className="header">
                <h2>Welcome to the Car Configurator!</h2>
            </header>
            { page === 'SUMMARY' ? summaryPage() : homePage() }
        </div>
    );
}

export default connect(mapStateToProps)(App);
