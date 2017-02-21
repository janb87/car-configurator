import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/reducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import carBrandsSaga from './sagas/carBrandsSaga'
import { carBrandsFetchRequested } from './actions/actionCreators';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(carBrandsSaga);

const render = () => {
    ReactDOM.render(
        (<Provider store={store}><App /></Provider>),
        document.getElementById('root')
    );
};
store.subscribe(render);
store.dispatch(carBrandsFetchRequested());
render();
