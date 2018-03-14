import React from 'react';
import './registerTemp.css';


class RegisterView extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className='main-div height-100 bg-bl'>
				<div className='container-fluid height-100'>
					<div className='row center-div text-register'>
						The sale of tickets goes live on 20th of March, 2018
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterView;