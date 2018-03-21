import React from 'react';
import './sponsors.css';
class SponsorsView extends React.Component{
	render(){
		return(
			<div className='main-div sponsor-main'>
				<div className='container'>
					<div className='row sponsor-heading'>
						Sponsors for TEDx NIT Srinagar
					</div>
					<div className='row hdfc sponsor'>
						<img className="img-responsive" src='images/hdfc.jpg'/>
					</div>
					<div className='row catalyst sponsor'>
						<img className="img-responsive" src='images/catalyst.jpg'/>
					</div>
					<div className='row mamta sponsor'>
						<img className="img-responsive" src='images/mamta.jpg'/>
					</div>
				</div>
			</div>
		);
	}
}

export default SponsorsView;