import React from 'react';
import {Link} from 'react-router-dom';
import fire from '../../../../fire';
import ReactGA from 'react-ga';
import './getTicket.css';
import * as list from '../../../../data.json';

class GetTicket extends React.Component{

	constructor(){
		super();
		this.state = {
			exsists: null,
			promoCode: '',
			name:'',
			purchased: false
		};
	}
	
	componentWillMount(){
		document.addEventListener('unii:ticket:purchased', () => {
			this.setState({
				purchased: true
			});
		}, false);
	}

	submitForm = (e) => {
		e.preventDefault();
		var userId = this.state.promoCode;
		fire.database().ref('/coupons/' + userId).once('value').then((snapshot) => {
			let data = snapshot.val();
			if(data===null){
				data = {
					isValid: false
				};
			}
			else{
				data.isValid=true;
			}
			if(data.isValid===true){
				this.setState({
					exsists: true,	
					name: data.name
				});
			}
			else{
				this.setState({
					exsists: false			
				});
			}
		});
	}

	inputChange = (e) => {
		this.setState({
			promoCode: e.target.value
		});
	}

	


	render(){
		const WrappedLink = () => {
			return (
			  <button>
					<Link 
						style={{display: 'block', height: '100%'}} 
						to=''
						role='button'
					>
									Process to Payment
					</Link>
			  </button>
			);
		  };
		return(
			<div className='main-div height-100'>
				<div className='container-fluid height-100 get-ticket-main'>
					<div className='row center-row'>
						{
							this.state.exsists===null
							&&
							<div className='col-xs-offset-0 col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6'>
								<form onSubmit={(e) => this.submitForm(e)} className='ticket-form'>
									<div className="form-group coupon-form">
										<input type="text" className="form-control coupon-input" required onChange={(e) => this.inputChange(e)} value={this.state.promoCode}/>
										<label className={this.state.promoCode.length ? 'form-label-text fix-top-label coupon-label' : 'form-label-text coupon-label'}>Promo Code</label>
									</div>
									<div className='register-btn-div center-align'>
										<button type="submit" className="btn btn-default register-btn">
											<span>Submit</span>
										</button>
									</div>
								</form>   
							</div>
						}
						{
							this.state.exsists===false
							&&
							<div className='col-xs-offset-0 col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 not-valid'>
								The promocode you entered is not valid.
							</div>
						}
						{
							this.state.exsists===true
							&&
							this.state.purchased===false
							&&
							<div className='col-xs-offset-0 col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6' >
								<div className='name-text'>
									Hey, {this.state.name}
								</div>
								<a 
									href='https://www.universe.com/events/tedxnitsrinagar-always-inspiring-more-tickets-srinagar-3695DV?buttonColor=#3A66E5&buttonText=Get Tickets'
									className='btn btn-default register-btn'
								>
								Proceed to Payment
								</a>
								<div className='card-text'>
									The payment gateway will ask you to enter credit card details, however debit card details will also be accepted.
								</div>
							</div>
						}
						{
							this.state.exsists===true
							&&
							this.state.purchased===true
							&&
							<div className='success-text'>
								See you on the 15th, {this.state.name} :)
							</div>
						}
					</div>
				</div>
			</div>
		);
	}

	componentWillUnmount(){
		
	}

}


export default GetTicket;