import React from 'react';
import { Link } from 'react-router-dom';
import fire from '../../../../fire';
import { createBrowserHistory as history} from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import uniqid from 'uniqid';
import './registerView.css';

class RegisterView extends React.Component{
	constructor(){
		super();
		this.state = {
			name: '',
			email: '',
			isSubmittingForm: 0,
			enroll: '',
			phone: '',
			registered: false
		};
	}


	componentWillMount(){
		ReactGA.initialize('UA-114968623-1');
		ReactGA.pageview(this.props.location.pathname);
	}


	submitForm = (e) => {
		e.preventDefault();
		this.setState({
			isSubmittingForm:1,
		});
		const id = uniqid(this.state.phone + '-');
		fire.database().ref('registered/' + id).set({
			username: this.state.name,
			email: this.state.email,
			phone: this.state.phone,
			enroll: this.state.enroll,
			timestamp: Date.now()
		})
			.then( () => {
				this.setState({
					isSubmittingForm: 2
				});
			});
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
					<div className='row'>
						{/* <div className='col-md-12 top-image'>
						</div> */}
						<img className="img-responsive header-img" src="/images/header.jpeg" alt="Chania"/>
					</div>
					<div className='row'>
						<div className='col-xs-offset-0 col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6'>
							{
								this.state.isSubmittingForm===0
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
									<div className="form-group">
										<span className="input-group-addon">(+91)</span>
										<input type="tel" size="10" minLength="10" maxLength="10" className=" form-control tel-input"  required onChange={(e) => this.inputChange(e,'phone')} value={this.state.phone}/>
										<label className={this.state.phone.length ? 'form-label-text fix-top-label tel-label-top' : 'form-label-text tel-label'}>Phone Number</label>
									</div>
									<div className="form-group">
										<input type="text" className=" form-control"  required onChange={(e) => this.inputChange(e,'enroll')} value={this.state.enroll}/>
										<label className={this.state.enroll.length ? 'form-label-text fix-top-label' : 'form-label-text'}>Enrollment Number</label>
									</div>
									<div className='conditions'>
										<ul className="list-group">
											<h2>Terms and Conditions</h2>
											<li className="list-group-item">
												1. I am a student of National Institute of Technology, Srinagar and will produce a college ID card on the day of the event.
											</li>
											<li className="list-group-item">
												2. I will firmly abide by all the disciplinary rules and regulations as guided by National Institute of Technology, Srinagar and TED Global community and will maintain the courtesy of the event.
											</li>
											<li className="list-group-item">
												3. Registering for TEDxNITSrinagar does not guarantee the final ticket for the event. The tickets will be allocated to random 100 people and will be confirmed only after the final payment, as the TEDx guidelines restrict the number of audience to 100.
											</li>
											<li className="list-group-item">
												4. I am willing to register for the event.
											</li>
											
										</ul>
									</div>
									<div className="checkbox center-align">
										<label>
											<input type="checkbox" required/> I Agree
										</label>
									</div>
									<div className='register-btn-div center-align'>
										<button type="submit" className="btn btn-default register-btn">
											<span>Submit</span>
										</button>
									</div>
								</form>
								
							}
							{
								this.state.isSubmittingForm === 1
									&&
									<div className='loading-message row center-text'>
										Loading
									</div>
							}
							{
								this.state.isSubmittingForm === 2
									&&
									<div className='success-message row center-text'>
										<div className='check-icon'><i className="fa fa-check"></i></div>
										You have successfully registered for the event.
										<br/>
										We will contact you via email and/or phone with futher updates.
									</div>
							}
						</div>
					</div>
				</div>
			</div>
		);	
	}

}

export default RegisterView;