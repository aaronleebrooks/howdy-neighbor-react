import React from 'react';
import {connect} from 'react-redux';

import './css/info-column.css';

export class Sidebar extends React.Component {
    render() {
        return (
            <section className="info-section">
                <img src="logo.com" alt="monkey"></img>
                <p>Hello Sidebar</p>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Sidebar);
