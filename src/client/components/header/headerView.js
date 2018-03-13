import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

class HeaderView extends React.Component{
	constructor(){
		super();
		this.state = {
			navbar: false
		};
	}

	toggleNavbar = () => {
		this.setState({
			navbar: !this.state.navbar
		});
	}

	closeNavbar = () => {
		this.setState({
			navbar: false
		});
	}

	log = () => {
		
	}

	render(){
		return(
			<div className="my-nav navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" onClick={this.toggleNavbar}>
							<span className="icon icon-bar"></span>
							<span className="icon icon-bar"></span>
							<span className="icon icon-bar"></span>
						</button>
						<NavLink to='/' className="navbar-brand" onClick={this.closeNavbar} >TEDxNITSrinagar</NavLink>
					</div>
					<div className={this.state.navbar===false ? 'collapse navbar-collapse' : '' }>
						<ul className="nav navbar-nav navbar-right">
							<li><NavLink to='/overview' className='nav-link' activeStyle={{ backgroundColor: 'red' }} onClick={this.toggleNavbar} >Overview</NavLink></li>
							<li><NavLink to='/speakers' className='nav-link' activeStyle={{ backgroundColor: 'red' }} onClick={this.toggleNavbar} >Speakers</NavLink></li>
							<li><NavLink to='/register' className='nav-link' activeStyle={{ backgroundColor: 'red' }} onClick={this.toggleNavbar} >Register</NavLink></li>
							{/* <li><NavLink to='/venue' className='nav-link' activeStyle={{ backgroundColor: 'red' }} onClick={this.toggleNavbar} >Venue</NavLink></li>
							<li><NavLink to='/sponsors' className='nav-link' activeStyle={{ backgroundColor: 'red' }} onClick={this.toggleNavbar} >Sponsors</NavLink></li>
							<li><NavLink to='/contact' className='nav-link' activeStyle={{ backgroundColor: 'red' }} onClick={this.toggleNavbar} >Contact</NavLink></li> */}
							<li><NavLink to='/blog' className='nav-link' activeStyle={{ backgroundColor: 'red' }} onClick={this.toggleNavbar} >Blog</NavLink></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}

}

export default HeaderView;