import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import configureStore from './ConfigureStore';
import createHistory from 'history/createMemoryHistory';

export function renderHtml(req, preloadedState) {
    const history = createHistory({ initialEntries: [req.path] })
    const store = configureStore(history, preloadedState, true);

    return renderToStaticMarkup((<Provider store={store}><App /></Provider>));
};
