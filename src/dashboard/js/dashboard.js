import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actions from '../../actions/actions';

import QuestionPreview from './question-preview'
import SearchBar from './search-bar'
import AddQuestionForm from './add-question'

export class Dashboard extends React.Component {

    componentWillMount() {
        this.props.fetchQuestions()
    }

    componentDidMount() {
        this.props.fetchQuestions()
        if (!this.props.loggedIn) {
            return;
        }
    }


    render() {
        // Only visible to logged in users
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        var filteredQuestions;
        const fetchedQuestionArray = this.props.questions;

        if(fetchedQuestionArray) { 


        if (this.props.match.params.id === 'all') {

            filteredQuestions = fetchedQuestionArray;

        } else if (this.props.match.params.id === 'automotive'){

            filteredQuestions = fetchedQuestionArray.filter(function(ques){
                if (ques.type === 'Automotive'){
                    return ques;
                }
            })
        } else if (this.props.match.params.id === 'plumbing'){

            filteredQuestions = fetchedQuestionArray.filter(function(ques){
                if (ques.type === 'Plumber'){
                    return ques;
                }
            })

        } else if (this.props.match.params.id === 'electrical'){

            filteredQuestions = fetchedQuestionArray.filter(function(ques){
                if (ques.type === 'Electric'){
                    return ques;
                }
            })

        } else if (this.props.match.params.id === 'carpentry'){

            filteredQuestions = fetchedQuestionArray.filter(function(ques){
                if (ques.type === 'Carpentry'){
                    return ques;
                }
            })

        }
        const finishedQuestions = filteredQuestions.map((question, index) => 
                <QuestionPreview key={index} question={question}/>
        );

        return (
                <div className="questions-section">
                <SearchBar />
                <AddQuestionForm />
                <div className="question-holder">
                {finishedQuestions}
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
    const {currentUser} = store.auth;
    return {
        loggedIn: currentUser !== null,
        username: currentUser ? store.auth.currentUser.username : '',
        name: currentUser
            ? `${currentUser.firstName} ${currentUser.lastName}`
            : '',
        questions: store.questions.fetchedQuestions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestions: () => {
            dispatch(actions.fetchQuestions())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
