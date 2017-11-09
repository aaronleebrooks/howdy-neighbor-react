import React from 'react';
import {connect} from 'react-redux';
import ReactModal from 'react-modal'
import * as actions from '../actions/actions';
import {Link, Redirect} from 'react-router-dom';

import AddAnswerForm from './add-answer'

import './css/question-card.css';

export class QuestionCard extends React.Component {

    componentWillMount() {
      console.log(this, 'this')
      this.props.fetchSingleQuestion(this.props.match.params.id)
    }

    componentWillUpdate() {
      this.props.fetchSingleQuestion(this.props.match.params.id)
    }
  
  render () {
    const {singleQuestion} = this.props;
    if(singleQuestion) { 
     console.log(this, 'this')
        const answers = singleQuestion.answers.map((answer, index) =>
        <div className="answer-card">
            <h3 className="left-side">{answer.answer}</h3>
            <div className="user-info">
              <p>answered by {answer.user}</p>
              <p>on {answer.timestamp}</p>
         </div>
         </div>
        );

    return (
    <div>
          <Link to ="../dashboard/all">
          <button className="back-button">Go Back</button>
          </Link>
      <div className="question-page">
          <div className="question-section">
            <div className="actual-question">
              <div className="left-side">
                <h2>{singleQuestion.title}</h2>
                <p>{singleQuestion.explain}</p>
              </div>  
              <div className="user-info">
                <p>asked by {singleQuestion.user}</p>
                <p>on {singleQuestion.timestamp}</p>
            </div>
            </div>  
          <div className="answer-section">
          {answers}
          </div>
          </div>
            <AddAnswerForm id={singleQuestion._id}/>
      </div>
    </div>
    );
 
    } else {
      return(

      <div>
        loading...
      </div>) 
    }
     
}
}

const mapStateToProps = store => {
    console.log(store, 'store')
    const {currentUser} = store.auth;
    return {
        loggedIn: currentUser !== null,
        username: currentUser ? store.auth.currentUser.username : '',
        name: currentUser
            ? `${currentUser.firstName} ${currentUser.lastName}`
            : '',
        singleQuestion: store.singleQuestion.fetchedSingleQuestion
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleQuestion: (id) => {
            dispatch(actions.fetchOneQuestion(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
