import React from 'react';
import './sponsors.css';
class SponsorsView extends React.Component{
	render(){
		return(
			<div className='main-div sponsor-main'>
				<div className='container'>
					<div className='row sponsor-heading'>
						Our Partners
					</div>
					<div className='row hdfc sponsor'>
						<div> Banking Partners</div>
						<img className="img-responsive" src='images/hdfc6.jpg'/>
					</div>
					<div className='row catalyst sponsor'>
						<div> Education Partners</div>
						<img className="img-responsive" src='images/catalyst10.jpg'/>
					</div>
					<div className='row mamta sponsor'>
						<div> Hospitality Partners</div>
						<img className="img-responsive" src='images/mamta6.jpg'/>
					</div>
				</div>
			</div>
		);
	}
}

export default SponsorsView;