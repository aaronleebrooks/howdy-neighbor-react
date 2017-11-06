import React from 'react';
import {connect} from 'react-redux';
import ReactModal from 'react-modal'
import fetchOneQuestion from '../actions/actions';

import AddAnswerForm from './add-answer'

export class QuestionCard extends React.Component {

    componentOnMount() {
    const thisQuestion= this.props.dispatch(fetchOneQuestion(this.props.question._id))
    }

  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  
  render () {

    //map this
    const answers = this.props.question.answers.map((answer, index) =>
        <div className="answer-card">
            <h2>{answer.answer}</h2>
            <p>answered by {answer.user}</p>
            <p>on {answer.timestamp}</p>
         </div>
        );

    return (
      <div>
        <button onClick={this.handleOpenModal}>Read More</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
        >
          <h2>{this.props.question.question}</h2>
          <p>{this.props.question.explain}</p>
          <p>asked by {this.props.question.user}</p>
          <p>on {this.props.question.timestamp}</p>
          <div className="answer-section">
            {answers}
            <AddAnswerForm id={this.props.question._id}/>
          </div>
          <button onClick={this.handleCloseModal}>Close Question</button>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = store => {
    const {currentUser} = store.auth;
    return {
        loggedIn: currentUser !== null,
        username: currentUser ? store.auth.currentUser.username : '',
        name: currentUser
            ? `${currentUser.firstName} ${currentUser.lastName}`
            : '',
        questions: store.questions.fetchedQuestions,
        singleQuestion: store.singleQuestion
    };
};




export default connect(mapStateToProps)(QuestionCard);
