import React from 'react';
import { Switch , Route, Redirect} from 'react-router-dom';
import {AppView} from './appView';
import { Header } from './header';
import {Blog, SingleBlog} from './blog';
import { Contact } from './contact';
import { Intro } from './intro';
import { Overview } from './overview';
import { Register } from './register';
import { Sponsors } from './sponsors';
import { Venue } from './venue';
import {SpeakerNew} from './speaker-new';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component{

	componentWillMount(){

	}

	render(){
		return(
			<div>
				<Header/>
				<div className='app-div'>
					<Switch>
						<Route path='/blog/:name' component={SingleBlog}/>
						<Route path='/home' component={Intro}/>
						<Route path='/overview' component={Overview}/>
						<Route path='/blog' component={Blog}/>
						<Route path='/register' component={Register}/>
						<Route path='/speakers' component={SpeakerNew}/>
						<Route path='/sponsors' component={Sponsors}/>
						<Route path='/venue' component={Venue}/>
						<Route path='/contact' component={Contact}/>
						<Redirect to='/home'/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
