import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import CraftRegistrationForm from './registration-form-craft';
import InfoColumn from './info-column';

import './css/login-page.css';

export function CraftRegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <h2>Be One of Our Craftsmen!</h2>
            <InfoColumn craftsman='true'/>
            <CraftRegistrationForm />
            <footer className="logIn">
                <p><Link to="/login">Go ahead and Login!</Link></p>
            </footer>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CraftRegistrationPage);
