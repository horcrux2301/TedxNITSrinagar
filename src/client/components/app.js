import React from 'react';
import { Switch , Route, Redirect} from 'react-router-dom';
import {AppView} from './appView';
import {Header} from './header';
import {Blog, SingleBlog} from './blog';
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
						<Route path='/home' component={AppView}/>
						<Route path='/blog' component={Blog}/>
						<Redirect to='/home'/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
