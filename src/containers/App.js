import React from 'react';
import {connect} from 'react-redux';
import './App.scss';
import universal from 'react-universal-component';

const UniversalComponent = universal(props => import(`./${props.page}`));

const mapStateToProps = (state) => {
    return {...state.reducer, page: state.location.type};
};

const App = (props) => {
    const {page} = props;

    return (
        <div className="app">
            <header className="header">
                <h2>Welcome to the Car Configurator!</h2>
            </header>
            <UniversalComponent {...props} page={page === 'SUMMARY' ? 'SummaryPage' : 'HomePage'} />
        </div>
    );
}

export default connect(mapStateToProps)(App);
