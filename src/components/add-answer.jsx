import React from 'react'
import {connect} from 'react-redux';

import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';

import {postAnswer} from '../actions/actions';

export class AddAnswerForm extends React.Component {

     onSubmit = function(values) {
        const questionId= this.props.id;
        values.user = this.props.name;
        values.timestamp =  new Date();
        // window.location.reload();
        return this.props.dispatch(postAnswer(values, questionId));
    }

      render () {
        console.log(this)
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
            <form
                className="add-answer-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="answer">Question
                <Field
                    component={Input}
                    type="text"
                    name="answer"
                    id="answer"
                    required
                />
                </label>
                <button disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
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


AddAnswerForm = connect(
    mapStateToProps
  )(AddAnswerForm);


export default reduxForm({
    form: 'postAnswer',
    onSubmitFail: (errors, dispatch) => dispatch(focus('answer', 'explain'))
})(AddAnswerForm);