import React from 'react';
import List from './contactList';
import './contact.css';

const len = Object.keys(List).length;
let organizer1,organizer2,organizer3,organizer4;

class ContactView extends React.Component{
	render(){
		return(
			<div className='main-div height-100'>
				<div className='container-fluid contact-main height-100'>
					<div className='row organizer-heading'>
						Team @ TEDx NIT Srinagar
					</div>
					{
						Object.keys(List).map( (rowIndex) => {
							let singleRow = List[rowIndex];
							return(
								<div className='row organizer-single' key={rowIndex}>
									{
										Object.keys(singleRow).map( (organizerIndex) => {
											console.log(singleRow[organizerIndex]);
											const organizer = singleRow[organizerIndex];
											return(
												<div className='col-sm-3' key={organizerIndex}>
													<div className='organizer-image' style={{ 'backgroundImage': `url(${organizer.img})`}}></div>
													<div>{organizer.name}</div>
													<div>{organizer.designation}</div>
												</div>
											);
										})
									}
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default ContactView;