import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../reducers/reducer';
import App from './App';

const store = createStore(reducer);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render((<Provider store={store}><App /></Provider>), div);
});
