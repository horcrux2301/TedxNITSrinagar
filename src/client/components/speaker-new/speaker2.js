import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

class SpeakerSmall extends React.Component{
	constructor(props){
		super(props);
		this.state = { visible: false };
	}

	openSocialMedia  = (url) => {
		let win = window.open(url, '_blank');
		win.focus();
	}

	onVisibilitySensorChange = (isVisible)  => {
		if (isVisible) {
			this.setState({
				visible: true
			});
		}
	}

	render(){
		if(this.props.orient==='left'){
			return(
				<VisibilitySensor 
					onChange={this.onVisibilitySensorChange}
					partialVisibility={true}
					offset={{top:20}}
				>
					<div className='row speaker'>
						<div className='col-sm-7 col-xs-12 padd-top-12 padd-bott-12' style={{'textAlign': 'center'}}>
							<div className= {this.state.visible ? 'speaker-image speaker-image-animate' : 'speaker-image is-hidden' } style={{ 'backgroundImage': `url(${this.props.imgLg})`, 'display': 'inline-block' }}>
							</div>
						</div>
						<div className= {this.state.visible ? 'col-sm-5 col-xs-12 speaker-desc speaker-desc-left-animate speaker-desc-left' : 'col-sm-5 col-xs-12 speaker-desc speaker-desc-left is-hidden'}>
							<h3>{this.props.name}</h3>
							<h4>{this.props.subHeading}</h4>
							<p>
								{this.props.desc}
							</p>
							<div className='social-media-icons social-float-right'>
								{this.props.facebook.length > 0
															&&
															<i className="fa fa-facebook social-icon" onClick={() => this.openSocialMedia(this.props.facebook)}></i>
								}
								{this.props.twitter.length > 0
															&&
															<i className="fa fa-twitter social-icon" onClick={() => this.openSocialMedia(this.props.twitter)}></i>
								}
								{this.props.instagram.length > 0
															&&
															<i className="fa fa-instagram social-icon" onClick={() => this.openSocialMedia(this.props.instagram)}></i>
								}
							</div>
						</div>
					</div>
				</VisibilitySensor>
			);
		}
		else{
			return(
				<VisibilitySensor 
					onChange={this.onVisibilitySensorChange}
					partialVisibility={true}
					offset={{top:20}}
				>
					<div className='row speaker'>
						<div className='col-sm-7 col-xs-12 padd-top-12 padd-bott-12' style={{'textAlign': 'center'}}>
							<div className= {this.state.visible ? 'speaker-image speaker-image-animate' : 'speaker-image speaker-float-right is-hidden' } style={{ 'backgroundImage': `url(${this.props.imgLg})`, 'display': 'inline-block' }}>
							</div>
						</div>
						<div className= {this.state.visible ? 'col-sm-5 col-xs-12 speaker-desc speaker-desc-right-animate speaker-desc-right' : 'col-sm-5 col-xs-12 speaker-desc speaker-desc-right is-hidden'}>
							<h3>{this.props.name}</h3>
							<h4>{this.props.subHeading}</h4>
							<p>
								{this.props.desc}
							</p>
							<div className='social-media-icons'>
								{this.props.facebook.length > 0
														&&
														<i className="fa fa-facebook social-icon" onClick={() => this.openSocialMedia(this.props.facebook)}></i>
								}
								{this.props.twitter.length > 0
														&&
														<i className="fa fa-twitter social-icon" onClick={() => this.openSocialMedia(this.props.twitter)}></i>
								}
								{this.props.instagram.length > 0
														&&
														<i className="fa fa-instagram social-icon" onClick={() => this.openSocialMedia(this.props.instagram)}></i>
								}
							</div>
						</div>
					</div>
				</VisibilitySensor>
			);
		}
	
	}

}

export default SpeakerSmall;

