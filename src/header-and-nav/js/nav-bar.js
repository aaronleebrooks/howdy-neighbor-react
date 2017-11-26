import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import {Link} from 'react-router-dom';

import './howdyNeighborLogo.png'

import '../css/nav-bar.css';

export class NavBar extends React.Component {
    logOut() {
        this.props.dispatch(setCurrentUser(null));
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
        window.location.reload()
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        let logInButton;
        let signUpCraftsmanButton;
        let signUpButton;

        if (this.props.loggedIn) {
            logOutButton = (
                <li className="right"><Link to="/" onClick={() => this.logOut()}>Log Out</Link></li>
            );
        }
        if (this.props.loggedIn === false) {
            logInButton = (
                <li className="right">
                <Link to="./login">Login</Link></li>
            );
            signUpCraftsmanButton = (
                <li className="right">
                <Link 
                to="./craftsman-register" 
                >Sign Up as Link Craftsman!</Link></li>
            );
            signUpButton = (
                <li className="right">
                <Link 
                to="./register"
                >Sign Up as Link DIY-er!</Link></li>
            );
        }
        return (
                <nav className="header-bar">
                    <ul className="topnav">
                        <li><Link to="/"><img src={require ("./howdyNeighborLogo.png")}></img></Link></li>
                        {logOutButton}
                        {logInButton}
                        {signUpCraftsmanButton}
                        {signUpButton}
                    </ul>
                </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);
