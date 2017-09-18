
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {reducer} from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import carBrandsSaga from './sagas/carBrandsSaga'
import {carBrandsFetchRequested} from './actions/actionCreators';
import {connectRoutes} from 'redux-first-router';

export default (history, preLoadedState = null, isServer = false) => {
    const composeEnhancers = isServer ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const routesMap = {
        HOME: '/home',
        SUMMARY: '/summary'
    };
    const {reducer: locationReducer, middleware, enhancer} = connectRoutes(history, routesMap);

    const rootReducer = combineReducers({location: locationReducer, reducer});

    if (!isServer) {
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(rootReducer, composeEnhancers(enhancer, applyMiddleware(sagaMiddleware, middleware)));

        sagaMiddleware.run(carBrandsSaga);

        return store;
    } else {
        return createStore(rootReducer, { reducer: preLoadedState }, composeEnhancers(enhancer, applyMiddleware(middleware)));
    }
}
