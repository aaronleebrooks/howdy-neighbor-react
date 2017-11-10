import React from 'react';
import {connect} from 'react-redux';

import '../css/info-column.css';

export class InfoColumn extends React.Component {
    render() {
        let info;

        if (this.props.craftsman === 'true' ) {
            info = (
            <div>
                <h2>Welcome to Howdy Neighbor!</h2>
                <p>A few ground rules for Craftsmen</p>
                <ul>
                    <li>There are no stupid questions! This is a place for amateurs to communicate with professionals. Feel free to inform DIY-ers how to talk about your craft, but do not riticule them.</li>
                    <p></p>
                    <li>This is a unique platform to show your stuff! The DIY-ers are here to learn from your experience, not hire you for a job. Feel free to connect to potential clients, but your first priority should be to help!</li>
                    <p></p>
                    <li>Please be kind and helpful to all members of our community. Please do not swear, flame, or show any disrespect.</li>
                    <p></p>
                </ul>
            </div>            
            );
        } else {
            info = (
            <div>
                <h2>Welcome to Howdy Neighbor!</h2>
                <p>A few ground rules for DIY-ers!</p>
                <ul>
                    <li>Ask questions, be curious, and learn!</li>
                    <p></p>
                    <li>There are no stupid questions! This is a place for amateurs to communicate with professionals.</li>
                    <p></p>
                    <li>Please be kind and helpful to all members of our community. Please do not swear, flame, or show any disrespect.</li>
                    <p></p>
                </ul>
            </div>
            );
        }
        return (
            <section className="info-section">
                <img src="http://timbercompany.ancorathemes.com/wp-content/uploads/2016/06/team3-877x800.jpg" alt="elephant"></img>
                {info}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(InfoColumn);
