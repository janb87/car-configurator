import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { createStore } from 'redux';
import { reducer } from './reducers/reducer';
import { loadCarBrands } from './services/carBrands';
import { Provider } from 'react-redux';

const store = createStore(reducer);
const setCarBrandsAction = data => store.dispatch({ type: 'SET_CAR_BRANDS', value: data });
loadCarBrands().then(setCarBrandsAction);

const render = () => {
    ReactDOM.render(
        (<Provider store={store}><App /></Provider>),
        document.getElementById('root')
    );
};
store.subscribe(render);
render();
