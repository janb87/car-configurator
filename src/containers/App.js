import React from 'react';
import {connect} from 'react-redux';
import './App.scss';

const mapStateToProps = (state) => {
    return {...state.reducer, page: state.location.type};
};

const cachedPages = {};

class App extends React.Component {

    loadPage(page) {
        System.import(`./${page}`).then(Page => {
            cachedPages[page] = Page.default(this.props);
            this.forceUpdate();
        });
    }

    renderPage(page) {
        const pageContent = cachedPages[page];
        if (pageContent) {
            return pageContent;
        } else {
            this.loadPage(page);
            return (<div>Loading...</div>);
        }
    }

    render() {
        const {page} = this.props;

        return (
            <div className="app">
                <header className="header">
                    <h2>Welcome to the Car Configurator!</h2>
                </header>
                {this.renderPage(page === 'SUMMARY' ? 'SummaryPage' : 'HomePage')}
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
