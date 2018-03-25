import React from 'react';
import fire from '../../../../fire';
// import	* as list  from '../../../../convertcsv.json';
// import * as list1 from '../../../../data.json';

class GetTicket extends React.Component{

	constructor(){
		super();
		this.state = {
			exsists: null,
			promoCode: '',
		};
	}
	
	componentWillMount(){
		
		// fire.database().ref('ticket/' + '9906564885-jezhfbdv').set({
		// 	name: 'Waris Anwar',
		// 	isValid: true,
		// 	enrollNo: 'CSE/02/15'
		// });
		// let filter = [];
		// Object.keys(list).map((i,j) => {
		// 	// console.log(i,list[i]);
		// 	let attendee = list[i];
		// 	let tempAttendee = {};
		// 	Object.keys(attendee).map( (j) => {
		// 		// console.log(j,attendee[j]);
		// 		tempAttendee.couponCode=attendee[0];
		// 		tempAttendee.email=attendee[1];
		// 		tempAttendee.enroll=attendee[2];
		// 		tempAttendee.contact=attendee[3];
		// 		tempAttendee.name=attendee[5];
		// 	});
		// 	// console.log(i,tempAttendee);
		// 	filter.push(tempAttendee);
			
		// });

		// console.log(filter);

		// let abc = ''	;

		// Object.keys(filter).map((i,j) => {
		// 	// console.log(filter[i]);
		// 	abc+='"';
		// 	abc+=filter[i].name;
		// 	abc+='"';
		// 	abc+=':';
		// 	abc+=JSON.stringify(filter[i]);
		// 	abc+=',';
		// });

		// console.log(abc);
	}

	submitForm = (e) => {
		e.preventDefault();
		var userId = this.state.promoCode;
		fire.database().ref('/ticket/' + userId).once('value').then((snapshot) => {
			let data = snapshot.val();
			if(data===null){
				data = {
					isValid: false
				};
			}
			if(data.isValid===true){
				this.setState({
					exsists: true,					
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
		return(
			<div className='main-div height-100'>
				<div className='container-fluid height-100'>
					<div className='row center-row'>
						{
							this.state.exsists===null
							&&
							<div className='col-xs-offset-0 col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6'>
								<form onSubmit={(e) => this.submitForm(e)} className='ticket-form'>
									<div className="form-group">
										<input type="text" className="form-control" required onChange={(e) => this.inputChange(e)} value={this.state.promoCode}/>
										<label className={this.state.promoCode.length ? 'form-label-text fix-top-label' : 'form-label-text'}>Promo Code</label>
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
							<div className='col-xs-offset-0 col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6'>
								The promocode you entered is not valid.
							</div>
						}
						{
							this.state.exsists===true
							&&
							<div className='col-xs-offset-0 col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6'>
								Proceed to Payment Gateway. -> 
							</div>
						}
					</div>
				</div>
			</div>
		);
	}

	componentWillUnmount(){
		console.log('calling');
		fire.database().ref('ticket/' + '9906564885-jezhfbdv').set({
			name: 'Waris Anwar',
			isValid: false,
			enrollNo: 'CSE/02/15'
		})
			.then(
				() => {
					console.log('calling1');
				});
	}

}


export default GetTicket;