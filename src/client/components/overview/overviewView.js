import React from 'react';
import './overview.css';

class OverviewView extends React.Component{
	render(){
		return(
			<div className='main-div'>
				<div className='container-fluid'>
					<div className='row overview-top-section'>
						<div className='col-sm-6 top-section-text'>
							<h2>
							TEDx Program
							</h2>
							<p>
								The TEDx Program is designed to help communities, organizations and individuals to spark conversation and connection through local TED-like experiences.
								At TEDx events, a screening of TED Talks videos — or a combination of live presenters and TED Talks videos — sparks deep conversation and connections at the local level. TEDx events are planned and coordinated independently, under a free license granted by TED.
							</p>
						</div>
						<div className='col-md-6 col-sm-6'>
							<img src='https://i.imgur.com/TcbHeBK.png' className="img-responsive top-image-lg center-block" alt="Responsive image"/>
						</div>
					</div>
					<div className='row overview-middle-section'>
						<div className='col-md-4'>
							<i className="fa fa-group"></i>
							<h3>100+ Participants</h3>
							<p>TEDx events are capped at 100 attendees to promote an intimate experience where people can easily engage in conversation with one another.</p>
						</div>
						<div className='col-md-4'>
							<i className="fa fa-clock-o"></i>
							<h3>15 Topics </h3>
							<p>Science,Art,Technology,Experiences and more.</p>
						</div>
						<div className='col-md-4'>
							<i className="fa fa-microphone"></i>
							<h3>15 Speakers</h3>
							<p>Thinkers. Doers. Idea-generators.</p>
						</div>
					</div>
					<div className='row overview-bottom-section'>
						<div className='col-sm-6 bottom-section-text'>
							<h2>WATCH VIDEO</h2>
							<p>The difference between TED and TEDx events are that the former takes more of a global approach while the latter typically focuses on a local community that concentrates on local voices. “Officially, the 'x' in TEDx stands for independently organized TED event - but it's more of a TED multiplied.
							TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues — in more than 100 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world.</p>
						</div>
						<div className='col-md-6'>
							<div className="embed-responsive embed-responsive-4by3">
								<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/N-l1xtCMnpw"></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default OverviewView;