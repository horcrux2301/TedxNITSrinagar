import React from 'react';
import './appView.css';
import './animations.css';
import {CountDown} from '../countDown';
import log from 'console-emoji';

const OPTIONS = { date: '04/29/2018 11:00 AM', prefix: 'Until TedEx Event!'};
let i = 0;

class AppView extends React.Component{
	constructor(){
		super();
		this.state = {
			animateSecond: false,
			animateThird: false
		};
	}
	
	animatedOne = () => {
		const txt = 'NIT Srinagar';
		const speed = 130;
		if (i < txt.length) {
			this.textInput.innerHTML += txt.charAt(i);
			i++;
			setTimeout(this.animatedOne, speed);
		}
	}

	animatedSecond = () => {
		this.setState({
			animateSecond: true
		});
	}

	animatedThird = () => {
		this.setState({
			animateThird: true,
		});
	}

	componentWillMount(){
		log(':white_check_mark:There is nothing to look for here. Go to our social media pages linked above :100: :heart: :arrow_up:');
	}

	componentDidMount(){
		this.timeOutA = setTimeout(this.animatedOne,2000);
		this.timeOutB = setTimeout(this.animatedSecond,3560);
		this.timeOutC = setTimeout(this.animatedThird,5960);
	}

	componentWillUnmount(){
		clearTimeout(this.timeOutA);
		clearTimeout(this.timeOutB);
		clearTimeout(this.timeOutC);
	}

	openSocialMedia  = (url) => {
		let win = window.open(url, '_blank');
		win.focus();
	}

	render(){
		return(
			<div className='container-fluid main'>
				<div className='row'>
					<div className='container'>
						<div className =  {this.state.animateThird ?'row width-100 blur-in timer-row visiblex' : 'row width-100 timer-row hiddenx'}  >
							<CountDown options={OPTIONS}/>
						</div>
						<div className='row width-100'>
							<div className='col-xs-4 col-sm-3'>
								<div className='slide-in-left left-font'>
							Ted
								</div>
							</div>
							<div className='col-xs-4 col-sm-4'>
								<div className= {this.state.animateSecond ? 'slide-in-top center' : 'center'}>
							X
								</div>
							</div>
							<div className='col-xs-4 col-sm-5'>
								<div className= 'right font' ref = { (input) => this.textInput = input} >
								</div>
							</div>
						</div>
						<div className =  {this.state.animateThird ?'row width-100 blur-in visiblex' : 'row width-100 hiddenx'}  >
							<div className='col-xs-4 col-sm-3'>
								<div className='facebook-icon '>
									<i className='fa fa-facebook' onClick={() => this.openSocialMedia('https://www.facebook.com/tedxnitsrinagar')}></i>
								</div>
							</div>
							<div className='col-xs-4 col-sm-4 twitter-icon'>
								<i className='fa fa-twitter' onClick={() => this.openSocialMedia('https://twitter.com/TEDxNITSrinagar')}></i>
							</div>
							<div className='col-xs-4 col-sm-5 instagram-icon'>
								<i className='fa fa-instagram' onClick={() => this.openSocialMedia('https://www.instagram.com/tedxnitsrinagar')}></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AppView;