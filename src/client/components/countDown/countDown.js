import React from 'react';
import './countDown.css';

class CountDown extends React.Component{

	constructor(){
		super();
		this.state = {
			remaining: null,
		};
	}

	componentWillMount(){
		this.calculateTime();
		this.refreshInterval = setInterval(this.calculateTime,1000);
	}

	calculateTime = () => {
		let timeNow = new Date();
		let timeUntil = new Date(this.props.options.date);
		let remaining = this.DateBetween(timeNow,timeUntil);
		this.setState({
			remaining : remaining
		});
	}

	DateBetween = (startDate, endDate) => {
		let second = 1000;
		let minute = second * 60;
		let hour = minute * 60;
		let day = hour * 24;
		let distance = endDate - startDate;
		if (distance < 0) {
			return false;
		}
		let days = Math.floor(distance / day);
		let hours = Math.floor((distance % day) / hour);
		let minutes = Math.floor((distance % hour) / minute);
		let seconds = Math.floor((distance % minute) / second);
		let between = {};
		between['Days']=days;
		between['Hours']=hours;
		between['Min']=minutes;
		between['Sec']=seconds;

		return between;
	}
	

	render(){
		return(
			<div className='col-xs-12  blur-in countdown-color'>
				<div  className='countdown-flex'>
					{
						Object.keys(this.state.remaining).map( (index) => {
							if(index==='Days'){
								return(
									<div className='countdown-flex-each col-xs-3 col-sm-offset-2 col-sm-2' key={index}>
										<div>{this.state.remaining[index]}</div>
										<div>{index}</div>
									</div>
								);
							}
							else if(index==='Hours'){
								return(
									<div className='countdown-flex-each col-xs-3 col-sm-2' key={index}>
										<div>{this.state.remaining[index]}</div>
										<div>{index}</div>
									</div>
								);
							}
							else if(index==='Min'){
								return(
									<div className='countdown-flex-each col-xs-3 col-sm-2' key={index}>
										<div>{this.state.remaining[index]}</div>
										<div>{index}</div>
									</div>
								);
							}
							else{
								return(
									<div className='countdown-flex-each col-xs-3 col-sm-2' key={index}>
										<div>{this.state.remaining[index]}</div>
										<div>{index}</div>
									</div>
								);
							}
						})
					}
				</div>
			</div>
		
		);
	}

	componentWillUnmount(){
		clearInterval(this.refreshInterval);
	}

}

export default CountDown;