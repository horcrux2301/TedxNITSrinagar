import { MainActionTypes } from '../constants';
import { TedXDispatcher } from '../constants';
import axios from 'axios';

const Actions = {
	signUpForm(data){
		axios({
			method:'post',
			url:'/mailchimp',
			responseType:'text',
			data: data
		})
			.then(function(response) {
				TedXDispatcher.dispatch({
					type: MainActionTypes.SUBMIT_FORM_SUCCESS,
					data: response
				});
			})
			.catch(function(exception){
				let message = {
					'message': 'Error'
				}
				TedXDispatcher.dispatch({
					type: MainActionTypes.SUBMIT_FORM_FAILED,
					data: message
				});
			});
	}
};

export default Actions;