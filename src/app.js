import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import NavBar from './header-and-nav/js/nav-bar';
import HeaderBar from './header-and-nav/js/header-bar';
import LandingPage from './landing-and-login/js/landing-page';
import QuestionCard from './dashboard/js/question-card';

import Dashboard from './dashboard/js/dashboard';
import LoginPage from './landing-and-login/js/login-page';
import RegistrationPage from './landing-and-login/js/registration-page';
import CraftRegistrationPage from './landing-and-login/js/registration-page-craft';
import {refreshAuthToken} from './actions/auth';

import './landing-and-login/css/app.css';

export class App extends React.Component {
    componentDidMount() {
        if (this.props.hasAuthToken) {
            // Try to get a fresh auth token if we had an existing one in
            // localStorage
            this.props.dispatch(refreshAuthToken());
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <NavBar />
                <HeaderBar />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route path="/dashboard/:id" component={Dashboard} />
                <Route path="/question/:id" component={QuestionCard} />
                <Route exact path="/register" component={RegistrationPage} />
                <Route exact path="/craftsman-register" component={CraftRegistrationPage} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
