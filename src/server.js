import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {createStore} from 'redux';
import {reducer} from './reducers/reducer';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';

const store = createStore(reducer);

export function renderHtml() {
    return renderToString((<Provider store={store}><App /></Provider>));
};
