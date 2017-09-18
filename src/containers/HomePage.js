import React from 'react';
import Car from '../components/Car';
import ConfigurationPanel from './ConfigurationPanel';
import Link from 'redux-first-router-link';

export default function (props) {
    const {bodyColor, sideNumber, rimsType, rimsColor, selectedCarBrand, carBrands} = props;
    const matchingCarBrands = carBrands.filter(br => br.make === selectedCarBrand);

    let carBrandImageUrl = null;
    if (matchingCarBrands.length > 0) {
        carBrandImageUrl = matchingCarBrands[0].logoUrl;
    }

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
