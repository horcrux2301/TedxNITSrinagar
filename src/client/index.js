import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter, Router,  } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const newHistory = createBrowserHistory();

ReactDOM.render(
	<Router history={newHistory}>
		<App/>
	</Router>
	, document.getElementById('root'));