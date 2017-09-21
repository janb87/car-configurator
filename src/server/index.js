import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import configureStore from '../ConfigureStore';
import createHistory from 'history/createMemoryHistory';
import {flushChunkNames} from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

export default  (stats, requestPath, preloadedState) => {
    const history = createHistory({initialEntries: [requestPath]})
    const store = configureStore(history, preloadedState, true);

    const app = renderToString((<Provider store={store}><App /></Provider>));
    const chunkNames = flushChunkNames();
    const {js, styles, cssHash} = flushChunks(stats, {chunkNames});

    return `<!doctype html>
            <html>
            <head>
                ${styles}
            </head>
            <body>
                <div id="root">${app}</div>
                ${cssHash}
                ${js}
            </body>
            </html>
        `;
};
