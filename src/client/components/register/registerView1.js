import React from 'react';
import { Link } from 'react-router-dom';
import { createBrowserHistory as history} from 'history/createBrowserHistory';
import './registerView.css';

class RegisterView extends React.Component{
	constructor(){
		super();
		this.state = {
			name: '',
			email: '',
			isSubmittingForm: false,
			message: '',
			ticketBought: false
		};
	}

	componentWillMount(){
		document.addEventListener('unii:opened', function (event) { console.log('Window was opened'); }, false);
		document.addEventListener('unii:closed',  (event) => { 
			this.setState({
				abc:'def'
			});
		}, false);
		document.addEventListener('unii:ticket:purchased',  (event) => {
			// this.reload = setTimeout( this.props.history.push('/blog'),100);
			this.setState({
				ticketBought: true
			});
		}, false);
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			message: nextProps.user.get('message') ,
			isSubmittingForm: nextProps.user.get('isSubmittingForm') ,
			name: '',
			email: '',
		});
	}

	submitForm = (e) => {
		e.preventDefault();
		let formData = {};
		formData.name = this.state.name;
		formData.email = this.state.email;
		this.setState({
			isSubmittingForm:true,
			submitted: true
		});
		this.props.signUpForm(formData);
	}

	inputChange = (e,field) => {
		let state = this.state;
		state[field] = e.target.value;
		this.setState(state);
	}

	render(){
		return(
			<div className='main-div main-div-bottom register-main height-100'>
				<div className='container-fluid height-100'>
					<div className='row center-row'>
						{
							this.state.ticketBought===false
								&&
								<form onSubmit={(e) => this.submitForm(e)} className='ticket-form'>
									<div className="form-group">
										<input type="text" className="form-control" required onChange={(e) => this.inputChange(e,'name')} value={this.state.name}/>
										<label className={this.state.name.length ? 'form-label-text fix-top-label' : 'form-label-text'}>Name</label>
									</div>
									<div className="form-group">
										<input type="email" className=" form-control"  required onChange={(e) => this.inputChange(e,'email')} value={this.state.email}/>
										<label className={this.state.email.length ? 'form-label-text fix-top-label' : 'form-label-text'}>Email</label>
									</div>
									<button type="submit" className="btn btn-default register-btn" onClick={(e) => this.submitForm(e)} disabled={this.state.disabled}>
										<span>Submit</span>
									</button>
								</form>
								
						}
						{
							this.state.isSubmittingForm === true
									&&
									this.state.message.length===0
									&&
									this.state.ticketBought===false
									&&
									<button type="submit" className="btn btn-default register-btn" disabled={this.state.disabled}>
										<div className='loader'>
											<div className='ball-clip-rotate'>
												<div></div>
											</div>
										</div>
									</button>
						}
						{
							this.state.isSubmittingForm === false
									&&
									this.state.message==='Success'
									&&
									this.state.ticketBought===false
									&&
									<Link 
										to='https://www.universe.com/events/tedx-tickets-srinagar-TNF5JY?buttonColor=#3A66E5&buttonText=Get Tickets' 
										className='btn btn-default btn-md btn-arrow read-more-btn'>
										Proceed to Payment ->
									</Link>
						}
						{
							this.state.ticketBought===true
							&&
							this.state.message==='Success'
							&&
							<div>
								You have bought the ticket.
								Your ticket ID is event.detail.ticket_id
							</div>
						}
					</div>
				</div>
			</div>
		);	
	}

}

export default RegisterView;