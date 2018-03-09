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

		return(
			<div className='intro-main'  >
				<div className='container'>
					<div className='row countdown-row'>
						<div className='countdown-text'>
							<CountDown options={OPTIONS} />
						</div>
					</div>
					<div className='row register-row'>
						<div className='register-button'>
							<Link to='/register' className='btn btn-default btn-lg'>Register</Link>
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
