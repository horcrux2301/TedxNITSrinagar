import React from 'react';
import './sponsors.css';
import ReactGA from 'react-ga';
class SponsorsView extends React.Component{

	componentWillMount(){
		ReactGA.initialize('UA-114968623-1');
		ReactGA.pageview(this.props.location.pathname);
	}

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
					<div className='row kashmirhealth sponsor'>
						<div> Health Partners</div>
						<img className="img-responsive" src='images/kashmirhealth.jpg'/>
					</div>
				</div>
			</div>
		);
	}
}

export default SponsorsView;