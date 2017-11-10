import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import '../css/landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard/all" />;
    }

    return (
    <main>
        <div className="website info">
            <h1>What Can You Do?</h1>
            <div className="website-card">
                    <img src="http://timbercompany.ancorathemes.com/wp-content/uploads/2016/06/post-7-555x375.jpg" alt="cats"></img>
                    <div className="textStuff">
                    <h3>Ask the Tough Questions!</h3>
                    <p>Describe your most difficult problems and have them answered by professionals.</p>
                </div>
                </div>
                <div className="website-card">
                    <img src="http://timbercompany.ancorathemes.com/wp-content/uploads/2016/06/post-4-555x375.jpg" alt="cats"></img>
                    <div className="textStuff">
                    <h3>Post Your Experienced Answers!</h3>
                    <p>Let others know how you would solve their issue.</p>
                </div>
                </div>
                <div className="website-card">
                    <img src="http://timbercompany.ancorathemes.com/wp-content/uploads/2016/06/post-8-555x375.jpg" alt="cats"></img>
                    <div className="textStuff">
                    <h3>Find what you need!</h3>
                    <p>Search through the questions that matter most to you!</p>
                </div>
                </div>
            </div>
        <div className="diyer info">
            <h1>Hobbyists</h1>
            <div className="examples">
            <div className="example-card">
                    <img src="http://i.imgur.com/4AelwMj.jpg" alt="cats"></img>
                    <h3>Got a leaky O-Ring?</h3>
                    <p>Get your questions answered by a plumber who does this 20 times a day.</p>
                </div>
                <div className="example-card">
                    <img src="https://i.imgur.com/fMkwytJ.png" alt="cats"></img>
                    <h3>Promised your kids a treehouse?</h3>
                    <p>Find a carpenter who can let you know how to keep them safe.</p>
                </div>
                <div className="example-card">
                    <img src="https://i.imgur.com/NSEfxks.png" alt="cats"></img>
                    <h3>Car sounding more like your lawnmower?</h3>
                    <p>Talk to an honest mechanic you can trust.</p>
                </div>
                </div>
            </div>
            <div className="craftsmen info">
                <h1>Craftsmen</h1>
                <div className="example-card">
                    <img src="http://i.imgur.com/WjuDkxE.jpg" alt="cats"></img>
                    <h3>Share your craft!</h3>
                    <p>Be able to help teach the next generation of your craft.</p>
                </div>
                <div className="example-card">
                    <img src="https://i.imgur.com/zYJtsKp.png" alt="cats"></img>
                    <h3>Show your stuff!</h3>
                    <p>Flex your skills and show that you are a master of your craft.</p>
                </div>
                <div className="example-card">
                    <img src="https://i.imgur.com/4eF9L4H.png" alt="cats"></img>
                    <h3>Connect with your clients!</h3>
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
