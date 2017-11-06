import axios from 'axios'
import {API_BASE_URL} from '../config';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});


export const fetchOneQuestion = (questionId) => dispatch => {
	return fetch(`${API_BASE_URL}/questions/questions/${questionId}`, {
		method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
	})
	.then(res => res.json())
	.then(({data}) => dispatch(storeOneQuestion(data)))
	.catch(err => {
		dispatch(fetchProtectedDataError(err));
	});
}

export var fetchQuestions= () => {
	return (dispatch, getState) => {
        return axios.get(`${API_BASE_URL}/questions/questions/`)
		.then((response) => {
			dispatch(storeQuestions(response.data))
		})
		.catch((error) => {
			console.log(error)
		})
	}
}


export var storeQuestions = (data) => {
	return {
		type: 'STORE_QUESTIONS',
		data
	}
}

export var storeOneQuestion = (data) => {
	return {
		type: 'STORE_ONE_QUESTION',
		data
	}
}


export const postQuestion = (question) => dispatch => {
    return fetch(`${API_BASE_URL}/questions/questions/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(question)
    })
    	.then(res => res.json())
		.catch(err => {
			dispatch(fetchProtectedDataError(err));
	});
};

export const postAnswer = (answer, questionId) => dispatch => {
    return fetch(`${API_BASE_URL}/questions/questions/${questionId}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(answer)
    })
    	.then(res => res.json())
		.catch(err => {
			dispatch(fetchProtectedDataError(err));
	});
};