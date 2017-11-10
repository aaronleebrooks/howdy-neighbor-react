import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import DiyRegistrationForm from './registration-form-diy';
import InfoColumn from './info-column';

import '../css/login-page.css';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard/all" />;
    }
    return (
        <div className="home">
            <h2 className="title">Be One of Our DIY-ers!</h2>
            <InfoColumn craftsman="false"/>
            <DiyRegistrationForm />
            <footer className="logIn">
                <p><Link to="/login">Go ahead and Login!</Link></p>
            </footer>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
