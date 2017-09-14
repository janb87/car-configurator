import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.scss';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers/reducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import carBrandsSaga from './sagas/carBrandsSaga'
import { carBrandsFetchRequested } from './actions/actionCreators';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(carBrandsSaga);

ReactDOM.render(
    (<Provider store={store}><App /></Provider>),
    document.getElementById('root')
);
store.dispatch(carBrandsFetchRequested());
