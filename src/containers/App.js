import React from 'react';
import {connect} from 'react-redux';
import {loadHomePage, loadSummaryPage} from 'load-pages';
import './App.scss';

const mapStateToProps = (state) => {
    return {...state.reducer, page: state.location.type};
};

const cachedPages = {};

class App extends React.Component {

    loadPage(page) {
        const load = page === 'SUMMARY' ? loadSummaryPage : loadHomePage;
        return load(Page => {
            cachedPages[page] = Page.default;
            this.forceUpdate();
        });
    }

    renderPage(page) {
        const pageContent = cachedPages[page];
        if (typeof pageContent === 'function') {
            return pageContent(this.props);
        }
        const component = this.loadPage(page);
        if (typeof component === 'function') {
            return component(this.props);
        }
        return (<div>Loading...</div>);
    }

    render() {
        const {page} = this.props;

        return (
            <div className="app">
                <header className="header">
                    <h2>Welcome to the Car Configurator!</h2>
                </header>
                {this.renderPage(page)}
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
