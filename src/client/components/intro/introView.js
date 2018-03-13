import React from 'react';
import './intro.css';
import { CountDown } from '../countDown';
import { Link } from 'react-router-dom';

const OPTIONS = { date: '04/29/2018 11:00 AM', prefix: 'Until TedEx Event!'};
const scrollTextArray = ['Ideas','Innovation','Science','Inspiration'];

class IntroView extends React.Component{
	
	constructor(){
		super();
		this.state = {
			id: 0,
			pageX: null,
			pageY: null,
			translate: null,
		};
	}

	componentDidMount(){
		this.interval = setInterval(this.scrollText,2000);
	}


	scrollText = () => {
		let length = scrollTextArray.length;
		let id = this.state.id;
		if(id===length-1)
			id=0;
		else
			id+=1;
		this.setState({
			id: id
		});
	}

	onMouseMove = (e) => {
		let pageX = e.pageX;
		let pageY = e.pageY;
		this.setState({
			pageX,
			pageY,
			// translate : 'translate(' + pageX/1000 + 'px, ' + pageY/1000 + 'px) '
		});
	}

	render(){
		// const items = scrollTextArray.map((item) => (
		// 	<div key={item}>
		// 		{item}
		// 	</div>
		// ));

		const items = 
		[
			<div key={1}>
				{scrollTextArray[this.state.id]}
			</div>
		];

		const Icon = () => (
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
				x="0px" y="0px" viewBox="0 0 36.1 25.8" 
				enableBackground="new 0 0 36.1 25.8">
				<g><line fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9">
				</line><polyline fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7   ">
				</polyline></g></svg>
		);

		return(
			<div className='intro-main'  >
				<div className='container'>
					{/* <div className='row countdown-row'>
						<div className='countdown-text'>
							<CountDown options={OPTIONS} />
						</div>
					</div> */}
					<div className='row heading-intro'>
						<div className='col-xs-12 heading-main'>
						Tedx NIT Sringar
						</div>
						<div className='col-xs-12 heading-date'>
						15th April, 2018
						</div>
					</div>
					<div className='row register-row fadeIn'>
						<div className='col-xs-offset-0 col-xs-6 col-sm-offset-3 col-sm-3 col-md-offset-3 col-md-3'>
							<div className='register-button '>
								<Link to='/register' className='btn btn-default btn-lg btn-arrow'><span>Get Tickets<Icon/></span>
								</Link>		
							</div>
						</div>
						<div className='col-xs-6 col-sm-4 col-md-3'>
							<div className='register-button '>
								<Link to='/speakers' className='btn btn-default btn-lg btn-arrow'><span>View Speakers<Icon/></span></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
				
		);
	}

	componentWillUnmount(){
		clearInterval(this.interval);
	}
}

export default IntroView;
