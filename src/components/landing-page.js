import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './css/landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
    <main>
        <div className="diyer info">
            <h1>Hobbyists</h1>
            <div className="example-card">
                <img src="www.catpics.org" alt="cats"></img>
                <h3>Got a leaky O-Ring?</h3>
                <p>Get your questions answered by a plumber who does this 20 times a day.</p>
            </div>
            <div className="example-card">
                <img src="www.catpics.org" alt="cats"></img>
                <h3>Promised your kids a treehouse?</h3>
                <p>Find a carpenter who can let you know how to keep them safe.</p>
            </div>
            <div className="example-card">
                <img src="www.catpics.org" alt="cats"></img>
                <h3>Car sounding more like your lawnmower?</h3>
                <p>Talk to an honest mechanic you can trust.</p>
            </div>
        </div>
        <div className="craftsmen info">
            <h1>Craftsmen</h1>
            <div className="example-card">
                <img src="www.catpics.org" alt="cats"></img>
                <h3>Share your craft</h3>
                <p>Be able to help teach the next generation of your craft.</p>
            </div>
            <div className="example-card">
                <img src="www.catpics.org" alt="cats"></img>
                <h3>Show your stuff</h3>
                <p>Flex your skills and show that you are a master of your craft.</p>
            </div>
            <div className="example-card">
                <img src="www.catpics.org" alt="cats"></img>
                <h3>Connect with your clients</h3>
                <p>Help your business gain long-term trust and respect within your community</p>
            </div>
        </div>
    </main>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
