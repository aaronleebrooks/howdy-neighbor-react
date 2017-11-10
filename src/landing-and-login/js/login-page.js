import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

import '../css/login-page.css';


export function LoginPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard/all" />;
    }

    return (
        <main>
            <LoginForm />
        <footer className="logIn">
            <p><Link to="/craftsman-register">Sign up as a Craftsman!</Link> or <Link to="/register">Sign up as a DIY-er!</Link></p>
        </footer>
        </main>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
