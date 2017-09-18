import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchProtectedData} from '../actions/protected-data';

import QuestionPreview from './question-preview'
import {Sidebar} from './sidebar'

export class Dashboard extends React.Component {

      constructor() {
        super()
        this.renderQuestions = this.renderQuestions.bind(this)
      }

    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        this.props.dispatch(fetchProtectedData());
    }

    renderQuestions() {
        const fakeQuestions = [{
            question: 'How do you install a bidet?',
            user: 'Tom Jones',
            timestamp: '12-25-2002',
            answers: [{
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }]
        }, {
            question: 'How do you install a bidet?',
            user: 'Tom Jones',
            timestamp: '12-25-2002',
            answers: [{
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }]
        }, {
            question: 'How do you install a bidet?',
            user: 'Tom Jones',
            timestamp: '12-25-2002',
            answers: [{
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }]
        }, {
            question: 'How do you install a bidet?',
            user: 'Tom Jones',
            timestamp: '12-25-2002',
            answers: [{
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }]
        }];


        // const questions = this.props.protectedData.map((question, index) => 
        //         <QuestionPreview key={index} index={index} {...question} />
        // );
        const questions = fakeQuestions.map((question, index) => 
                <QuestionPreview key={index} question={question}/>
        );
        console.log(questions)
        return questions;
    }

    render() {
        // Only visible to logged in users
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        // const fakeQuestions = [{
        //     question: 'How do you install a bidet?',
        //     user: 'Tom Jones',
        //     timestamp: '12-25-2002',
        //     answers: [{
        //         answer: 'Put it on the toilet',
        //         user: 'Sam Kinison',
        //         timestamp: '12-25-2003'
        //     }, {
        //         answer: 'Put it on the toilet',
        //         user: 'Sam Kinison',
        //         timestamp: '12-25-2003'
        //     }, {
        //         answer: 'Put it on the toilet',
        //         user: 'Sam Kinison',
        //         timestamp: '12-25-2003'
        //     }]
        // }, {
        //     question: 'How do you install a bidet?',
        //     user: 'Tom Jones',
        //     timestamp: '12-25-2002',
        //     answers: [{
        //         answer: 'Put it on the toilet',
        //         user: 'Sam Kinison',
        //         timestamp: '12-25-2003'
        //     }, {
        //         answer: 'Put it on the toilet',
        //         user: 'Sam Kinison',
        //         timestamp: '12-25-2003'
        //     }, {
        //         answer: 'Put it on the toilet',
        //         user: 'Sam Kinison',
        //         timestamp: '12-25-2003'
        //     }]
        // }, {
        //     question: 'How do you install a bidet?',
        //     user: 'Tom Jones',
        //     timestamp: '12-25-2002',
        //     answers: [{
        //         answer: 'Put it on the toilet',
        //         user: 'Sam Kinison',
        //         timestamp: '12-25-2003'
        //     }, {
        //         answer: 'Put it on the toilet',
        //         user: 'Sam Kinison',
        //         timestamp: '12-25-2003'
        //     }, {
        //         answer: 'Put it on the toilet',
        //         user: 'Sam Kinison',
        //         timestamp: '12-25-2003'
        //     }]
        // }, {
        //     question: 'How do you install a bidet?',
        //     user: 'Tom Jones',
        //     timestamp: '12-25-2002',
        //     answers: [{
        //         answer: 'Put it on the toilet',
        //         user: 'Sam Kinison',
        //         timestamp: '12-25-2003'
        //     }, {
        //         answer: 'Put it on the toilet',
        //         user: 'Sam Kinison',
        //         timestamp: '12-25-2003'
        //     }, {
        //         answer: 'Put it on the toilet',
        //         user: 'Sam Kinison',
        //         timestamp: '12-25-2003'
        //     }]
        // }];


        // // const questions = this.props.protectedData.map((question, index) => 
        // //         <QuestionPreview key={index} index={index} {...question} />
        // // );
        // console.log(fakeQuestions);
        // const questions = fakeQuestions.map((question, index) => 
        //         <QuestionPreview key={index} question={question}/>
        // );


        return (
                <div className="question-section">
                <h1>Hello</h1>
                <Sidebar />
                {this.renderQuestions()}
               </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        loggedIn: currentUser !== null,
        username: currentUser ? state.auth.currentUser.username : '',
        name: currentUser
            ? `${currentUser.firstName} ${currentUser.lastName}`
            : '',
        protectedData: state.protectedData.data
    };
};

export default connect(mapStateToProps)(Dashboard);
