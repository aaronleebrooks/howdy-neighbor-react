import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link, Redirect} from 'react-router-dom';

import QuestionCard from './question-card'

class QuestionPreview extends React.Component {
    render() {

        let question = this.props.question;
        console.log(question)
        return (
            <div className="question-card">
                <h2>{question.question}</h2>
                <p>asked by {question.user}</p>
                <p>on {question.timestamp}</p>
                <p>{question.answers.length} answers</p>
                // <QuestionCard question={question} />
             </div>
             );
    }
}

export default QuestionPreview;
