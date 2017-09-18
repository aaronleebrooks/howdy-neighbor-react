import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchProtectedData} from '../actions/protected-data';
import {ReactModal} from 'react-modal'

class QuestionCard extends React.Component {
  constructor () {
    super();
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

    // const question = this.props.question;
    const question = {
      //jk use postman to add a question to the db
    };

    //map this
    const answers = this.props.question.answers((answer, index) =>
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
          <h2>{question.question}</h2>
          <p>asked by {question.user}</p>
          <p>on {question.timestamp}</p>
          <div className="answer-section">
            {answers}
            //answerForm
          </div>
          <button onClick={this.handleCloseModal}>Close Question</button>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(QuestionCard);
