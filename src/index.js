import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.scss';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {reducer} from './reducers/reducer';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import carBrandsSaga from './sagas/carBrandsSaga'
import {carBrandsFetchRequested} from './actions/actionCreators';
import createHistory from 'history/createBrowserHistory';
import {connectRoutes} from 'redux-first-router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const history = createHistory()
const routesMap = {
    HOME: '/home',
    SUMMARY: '/summary'
};
const {reducer: locationReducer, middleware, enhancer} = connectRoutes(history, routesMap);

const rootReducer = combineReducers({location: locationReducer, reducer});
const store = createStore(rootReducer, composeEnhancers(enhancer, applyMiddleware(sagaMiddleware, middleware)));

sagaMiddleware.run(carBrandsSaga);

ReactDOM.render(
    (<Provider store={store}><App /></Provider>),
    document.getElementById('root')
);
store.dispatch(carBrandsFetchRequested());
