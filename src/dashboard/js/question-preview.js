import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import {Link, Redirect} from 'react-router-dom';

import QuestionCard from './question-card'

import '../css/question-preview.css';

class QuestionPreview extends React.Component {
    render() {

        let question = this.props.question;
        return (
                <div className="question-card">
                    <h2>{question.title}</h2>
                    <p>asked by {question.user}</p>
                    <p>on {question.timestamp}</p>
                    <p>{question.type}</p>
                    <p>{question.answers.length} answers</p>
                    <Link to={'../question/'+ question._id}>
                    <button className="button"> Read More! </button>
                    </Link>
                 </div>
             );
    }
}

export default QuestionPreview;
