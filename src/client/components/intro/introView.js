import React from 'react';
import './intro.css';
import { CountDown } from '../countDown';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
const OPTIONS = { date: '04/29/2018 11:00 AM', prefix: 'Until TedEx Event!'};
const scrollTextArray = ['Ideas','Innovation','Science','Inspiration'];
import fire from '../../../../fire';
let i=0;

class IntroView extends React.Component{
	
	constructor(){
		super();
		this.state = {
			id: 0,
			pageX: null,
			pageY: null,
			translate: null,
			text: '',
		};
	}

	componentWillMount(){
		// let str = '';
		// Object.keys(list1).map( (i) => {
		// 	let t1 = list1[i];
		// 	let x = {};
		// 	Object.keys(t1).map( (j) => {
		// 		x.couponCode = t1[0];
		// 		x.email = t1[1];
		// 		x.enroll = t1[2];
		// 		x.mobile = t1[4];
		// 		x.name = t1[5];
		// 	});
		// 	str += '"' + x.couponCode + '":' + JSON.stringify(x) + ',';
		// });
		// console.log(Object.keys(list).length);
		// console.log(Object.keys(list1).length);
		// console.log(list);
		// console.log(Object.keys(list).length);
		// console.log(list);
		// Object.keys(list).map((i) => {
		// 	let blah = list[i];
		// 	let id = blah.couponCode;
		// 	if(id!==undefined && id!==''){
		// 		fire.database().ref('coupons/' + id).set({
		// 			name:blah.name,
		// 			couponCode:blah.couponCode,
		// 			email:blah.email,
		// 			enroll:blah.enroll,
		// 			contact:blah.contact
		// 		});
		// 	}
		// 	else{
		// 		console.log(blah);
		// 	}
		// });
		// let ans = '';
		// let cnt=0;
		// console.log(Object.keys(list).length);
		// Object.keys(list).map((i) => {
		// 	// let blah = list[i];
		// 	// ans+= '"' + blah.couponCode + '"' + ':' + JSON.stringify(blah) + ',';
		// 	let blah = list[i];
		// 	cnt++;
		// 	console.log(blah.name, cnt);
		// 	let id = blah.couponCode;
		// 	if(id!==undefined){
		// 		fire.database().ref('coupons/' + id).set({
		// 			name:blah.name,
		// 			couponCode:blah.couponCode,
		// 			email:blah.email,
		// 			enroll:blah.enroll,
		// 			contact:blah.contact
		// 		});
		// 	}
		// 	else{
		// 		console.log(blah);
		// 	}
		// });

		// console.log(ans);
		ReactGA.initialize('UA-114968623-1');

		ReactGA.pageview(this.props.location.pathname);
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

	openSocialMedia  = (url, social) => {
		ReactGA.event({
			category: 'Social',
			action: social,
			label: social
		});  
		let win = window.open(url, '_blank');
		win.focus();
	}

	render(){
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
				<div className='container height-100'>
					{/* <div className='row countdown-row'>
						<div className='countdown-text'>
							<CountDown options={OPTIONS} />
						</div>
					</div> */}
					<div className='row heading-intro'>
						{/* <div className='col-xs-12 heading-main'>
						TEDx <span className='nit'>NIT</span> <span>Srinagar</span>
						</div> */}
						{/* <div className='col-xs-12 heading-inspiring-main'>
							<span className='heading-inspiring' ref = { (input) => this.textInput = input}>
								{this.state.text}
							</span>
						</div> */}
						{/* <div className='col-xs-12 heading-date'>
						15<sup>th</sup> April, 2018
						</div> */}
					</div>
					<div className='intro-footer navbar-fixed-bottom'>
						<div className='row register-row fadeIn'>
							<div className='col-xs-offset-0 col-xs-6 col-sm-offset-3 col-sm-3 col-md-offset-3 col-md-3'>
								<div className='register-button '>
									<Link to='/get-tickets' className='btn btn-default btn-lg btn-arrow'><span>Get Tickets<Icon/></span>
									</Link>		
								</div>
							</div>
							<div className='col-xs-6 col-sm-4 col-md-3'>
								<div className='register-button '>
									<Link to='/speakers' className='btn btn-default btn-lg btn-arrow'><span>View Speakers<Icon/></span></Link>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-xs-offset-0 col-xs-6 col-sm-offset-3 col-sm-3 col-md-offset-3 col-md-3 fb-ico'>
								<i className='fa fa-facebook' onClick={() => this.openSocialMedia('https://www.facebook.com/tedxnitsrinagar','facebook')}></i>
								<i className='fa fa-twitter twit-ico' onClick={() => this.openSocialMedia('https://twitter.com/TEDxNITSrinagar','twitter')}></i>
							</div>
							{/* <div className='col-xs-4 col-sm-2 twit-ico'>
								<i className='fa fa-twitter' onClick={() => this.openSocialMedia('https://twitter.com/TEDxNITSrinagar')}></i>
							</div> */}
							<div className='col-xs-6 col-sm-4 col-md-3 insta-ico'>
								<i className='fa fa-instagram' onClick={() => this.openSocialMedia('https://www.instagram.com/tedxnitsrinagar','instagram')}></i>
							</div>
						</div>
						<div className='footer-text-class'>
							This independent TEDx event is operated under license from TED.
						</div>
					</div>
				</div>
			</div>
				
		);
	}

	// componentWillUnmount(){
	// 	clearInterval(this.interval);
	// }
}

export default IntroView;
