import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from '../local-storage';
import {questionsReducer, singleQuestionReducer} from '../reducers/reducer';
import authReducer from '../reducers/auth';
import {setAuthToken} from '../actions/auth';

const initialState = {};
const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        questions: questionsReducer,
        singleQuestion: singleQuestionReducer
    }),
    initialState, 
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
}

export default store;