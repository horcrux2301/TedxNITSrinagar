import React from 'react';
import ReactGA from 'react-ga';
import './registerTemp.css';


class RegisterView extends React.Component{
	constructor(){
		super();
	}

	componentWillMount(){
		ReactGA.initialize('UA-114968623-1');

		ReactGA.pageview(this.props.location.pathname);
	}

	render(){
		return(
			<div className='main-div height-100 bg-bl'>
				<div className='container-fluid height-100'>
					<div className='row center-div text-register'>
						The registeration for the ticket goes live today at 2:00 PM
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterView;