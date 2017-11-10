import React from 'react';
import ReactModal from 'react-modal'
import {Redirect, Link} from 'react-router-dom';

import {connect} from 'react-redux';

import {Field, reduxForm, focus} from 'redux-form';
import Input from '../../input';
import {postQuestion} from '../../actions/actions';

import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';

import '../css/add-question-form.css';

export class AddQuestionForm extends React.Component {

    state = {
    questionId: null
  }


     onSubmit = function(values) {
        values.user = this.props.name;
        values.timestamp =  new Date();
        let postedQuestion = this.props.dispatch(postQuestion(values)).then((q) => this.setState({ questionId: q._id }));
        return postedQuestion;
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

    const {questionId} = this.state;

     if (questionId != null) {
       return <Redirect to={'/question/'+ questionId} />
     }

        let error;
        if (this.props.error) {
            error = (
                <div className="form-error">
                    {this.props.error}
                </div>
            );
        }

        return (
      <div>
        <button className="addQuestionButton" onClick={this.handleOpenModal}>Ask a Question
        </button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
           style='none'
        >
            <form
                className="add-question-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="title">Question
                <Field
                    component={Input}
                    type="text"
                    name="title"
                    id="title"
                    validate={[required, nonEmpty]}
                />
                </label>
                <label htmlFor="explain">Explain it
                <Field
                    component={Input}
                    type="text"
                    name="explain"
                    id="explain"
                    validate={[required, nonEmpty]}
                />
                </label>
                <label htmlFor="fieldExperience">Field of Experience</label>
                <Field
                    component="select"
                    type="select"
                    name="type"
                    validate={[required, nonEmpty]}
                >
                    <option value=""></option>
                    <option value="Plumber">Plumbing</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="Electric">Electric</option>
                    <option value="Automotive">Automotive</option>
                </Field>
                <button className="button" disabled={this.props.pristine || this.props.submitting}>
                    Send
                </button>
            <button className="button" onClick={this.handleCloseModal}>Go Back</button>
            </form>
        </ReactModal>
      </div>
        );
    }
};

const mapStateToProps = store => {
    const {currentUser} = store.auth;
    return {
        loggedIn: currentUser !== null,
        username: currentUser ? store.auth.currentUser.username : '',
        name: currentUser
            ? `${currentUser.firstName} ${currentUser.lastName}`
            : '',
        questions: store.fetchedQuestions
    };
};


AddQuestionForm = connect(
    mapStateToProps
  )(AddQuestionForm);


export default reduxForm({
    form: 'postQuestion',
    onSubmitFail: (errors, dispatch) => dispatch(focus('question', 'explain'))
})(AddQuestionForm);