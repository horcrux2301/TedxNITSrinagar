import React from 'react';
import Loader from '../loader/loaderView';
import './registerView.css';

class RegisterView extends React.Component{


	constructor(){
		super();
		this.state = {
			name: '',
			email: '',
			text: '',
			message: '',
			isSubmittingForm:false,
			disabled: false,
			length:0,
			submitted: false
		};
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			message: nextProps.user.get('message') ,
			isSubmittingForm: nextProps.user.get('isSubmittingForm') ,
			name: '',
			email: '',
			text: '',
		});
	}

	submitForm = (e) => {
		e.preventDefault();
		let formData = {};
		formData.name = this.state.name;
		formData.email = this.state.email;
		formData.text = this.state.text;
		this.setState({
			isSubmittingForm:true,
			submitted: true
		});
		this.props.signUpForm(formData);
	}

	inputChange = (e,field) => {
		let state = this.state;
		let length = this.refs.why.value.length;
		if(field==='text' && length<=500)
			state[field] = e.target.value;
		else if(field!='text')
			state[field] = e.target.value;
		state['disabled'] = length > 500 ? true : false;
		state['length'] = length;
		this.setState(state);
	}

	reset = () => {
		this.setState({
			name: '',
			email: '',
			text: '',
			message: '',
			isSubmittingForm:false,
			disabled: false,
			length:0,
			submitted: false
		});
	}

	componentWillMount(){
		document.addEventListener('unii:opened', function (event) { console.log('Window was opened'); }, false);
		document.addEventListener('unii:closed', function (event) { console.log('Window was closed'); }, false);
	}

	render(){
		return(
			<div className='main-div main-div-bottom register-main'>
				<div className='container-fluid'>
					<div className='intro-align'>
						<div className='row'>
							<div className='col-md-offset-3 col-md-6'>
							The number of people that can see TEDx event is capped at 100.
							Fill in the form below and we will see if we can arrange a pass for you.
							If you do get a pass we will send you an email confirming the same.
							</div>
						</div>
						<div className='row'>
							<div className='col-md-offset-3 col-md-6 form-div'>
								{
									this.state.submitted===false && this.state.isSubmittingForm===false 
										&&
										<form onSubmit={(e) => this.submitForm(e)}>
											<div className="form-group">
												<label>Name</label>
												<input type="text" className="form-control"  placeholder="Name" required onChange={(e) => this.inputChange(e,'name')} value={this.state.name}/>
											</div>
											<div className="form-group">
												<label >Email</label>
												<input type="email" className="form-control"  placeholder="Email" required onChange={(e) => this.inputChange(e,'email')} value={this.state.email}/>
											</div>
											<div className="form-group">
												<label>Please tell us why you want to be at this event</label> <span className='characters-left-span'> {500-this.state.length>=0 ? 500-this.state.length : 0 } characters left</span>
												<textarea type="text" className="form-control"  placeholder="Type here..." required onChange={(e) => this.inputChange(e,'text')} value={this.state.text} ref='why' style={{'resize': 'none'}}/>
											</div>
											{
												this.state.disabled && 
											<p>Please enter less than 500 characters.</p>
											}
											<button type="submit" className="btn btn-default" disabled={this.state.disabled}>Submit</button>
											<a href='https://www.universe.com/events/tedxnitsrinagar-tickets-srinagar-Z4R597?buttonColor=#3A66E5&buttonText=Get Tickets' >Get Tickets</a>
										</form>
								}
								{
									this.state.submitted===true && this.state.isSubmittingForm===true 
										&&
										<Loader/>
								}
								{
									this.state.submitted===true && this.state.isSubmittingForm===false && this.state.message === 'Success'
										&&
										<div>
											Form has been submitted.
										</div>
								}
								{
									this.state.submitted===true && this.state.isSubmittingForm===false && (this.state.message === 'Failed' || this.state.message === 'Error')
										&&
										<div>
											There was an error.
											<button className='btn btn-default' onClick={this.reset}>Retry</button>
											
										</div>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterView;