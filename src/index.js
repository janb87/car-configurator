import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.scss';
import configureStore from './ConfigureStore';
import {Provider} from 'react-redux';
import {carBrandsFetchRequested} from './actions/actionCreators';
import createHistory from 'history/createBrowserHistory';

const history = createHistory()
const store = configureStore(history);

ReactDOM.render(
    (<Provider store={store}><App /></Provider>),
    document.getElementById('root')
);
store.dispatch(carBrandsFetchRequested());
