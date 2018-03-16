import React from 'react';
import { Link } from 'react-router-dom';
import SpeakersList from './speakersHelper';
import VisibilitySensor from 'react-visibility-sensor';
import './speaker.css';
import Speaker from './speaker';
import SpeakerSmall from './speaker2';
import ReactGA from 'react-ga';

class SpeakerView extends React.Component{

	constructor(){
		super();
		this.state = {
			width: 0,
			height: 0
		};
	}


	handleResize = () => {
		this.setState({
			height: window.innerHeight,
			width: window.innerWidth
		});
		this.forceUpdate();
	}

	componentWillMount(){
		ReactGA.initialize('UA-114968623-1');
		console.log(this.props.location.pathname);
		ReactGA.pageview(this.props.location.pathname);
		this.setState({
			width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
			height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
		});
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}


	render() {
		if(this.state.width > 768 ){
			return(
				<div className='main-div'>
					<div className='speaker-main'>
						<div className='container-fluid'> 
							{
								Object.keys(SpeakersList).map( (speaker,index) => {
									speaker = SpeakersList[speaker];
									return(
										<Speaker
											key = {index}
											name={speaker.name}
											subHeading={speaker.subHeading}
											desc={speaker.desc}
											facebook={speaker.facebook}
											twitter={speaker.twitter}
											instagram={speaker.instagram}
											imgLg = {speaker.imgLg}
											orient = {index%2==0 ? 'left' : 'right'}
										/>
									);
								})
							}
						</div>
					</div>
				</div>
			);
		}
		else{
			return(
				<div className='main-div'>
					<div className='speaker-main'>
						<div className='container-fluid'> 
							{
								Object.keys(SpeakersList).map( (speaker,index) => {
									speaker = SpeakersList[speaker];
									return(
										<SpeakerSmall
											key = {index}
											name={speaker.name}
											subHeading={speaker.subHeading}
											desc={speaker.desc}
											facebook={speaker.facebook}
											twitter={speaker.twitter}
											instagram={speaker.instagram}
											imgLg = {speaker.imgLg}
											orient = {index%2==0 ? 'left' : 'right'}
										/>
									);
								})
							}
						</div>
					</div>
				</div>
			);
		}
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

}

export default SpeakerView;

