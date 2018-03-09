import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import { MainActionTypes } from '../constants';
import { TedXDispatcher } from '../constants';

const StoreState = Immutable.Record({
	message: null,
	isSubmittingForm : null,
});

class MainStore extends ReduceStore {
	constructor() {
		super(TedXDispatcher);
	}

	getInitialState() {
		return new StoreState();
	}

	reduce(state, action) {
		switch (action.type) {
		case MainActionTypes.SUBMIT_FORM_SUCCESS:
			state = state.merge({
				message: action.data.data.message,
				isSubmittingForm: false
			});
			return state;
		case MainActionTypes.SUBMIT_FORM_FAILED : 
			state = state.merge({
				message: action.data.message,
				isSubmittingForm: false
			});
			return state;
		default:
			return state;
		}
	}
}

export default new MainStore();