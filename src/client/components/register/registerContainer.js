'use strict';

import React from 'react';
import { Container } from 'flux/utils';
import { MainActions, MainStore } from '../../utility';
import RegisterView from './registerTemp';

class RegisterViewContainer extends React.Component {
	static getStores() {
		return [
			MainStore
		];
	}

	static calculateState(prevState) {
		return {
			user: MainStore.getState(),
			signUpForm: MainActions.signUpForm
		};
	}

	render() {
		return <RegisterView {...this.state} {...this.props}/>;
	}
}

export default Container.create(RegisterViewContainer);
