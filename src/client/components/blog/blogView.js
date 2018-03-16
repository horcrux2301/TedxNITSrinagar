import React from 'react';
import Blogs from './blogData';
import {Link, NavLink} from 'react-router-dom';
import fire from '../../../../fire';
import addBlog from './addBlog';
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton, WhatsappShareButton, WhatsappIcon } from 'react-share';
import './blog.css';
import ReactGA from 'react-ga';

class BlogView extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			blogs: null
		};
	}

	componentWillMount(){
		if(this.state.blogs===null) {
			fire.database().ref('/blogs').once('value').then((snapshot) =>  {
				this.setState({
					blogs: snapshot.val()
				});
			});
		}
		ReactGA.initialize('UA-114968623-1');
		ReactGA.pageview(this.props.location.pathname);
		// addBlog();
	}

	render(){

		const Icon = () => (
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
				x="0px" y="0px" viewBox="0 0 36.1 25.8" 
				enableBackground="new 0 0 36.1 25.8">
				<g><line fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9">
				</line><polyline fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7   ">
				</polyline></g></svg>
		);

		const baseUrl = 'http://www.tedxnitsrinagar.com/blog/';
		return(
			<div className= {this.state.blogs === null ? 'container-fluid extend' : 'container-fluid'} >
				<div className= {this.state.blogs === null ? 'row- width-100' : ''} >
					{
						this.state.blogs === null 
						&&
						<div>
							<div className='loader-view col-xs-offset-6 col-xs-5'>
								<div className='loader'>
									<div className='pacman'>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
									</div>
								</div>
							</div>
							<div className='col-xs-12 loading-text'>
								Fetching data from Falcon Heavy...
							</div>
						</div>
					}
					{
						this.state.blogs
						&&
						Object.keys(this.state.blogs).map( (index) => {
							const blog = this.state.blogs[index];
							return(
								<div className="col-sm-6 col-md-4" key={index}>
									<div className="thumbnail">
										<div className='thumbnail-image' style={{'backgroundImage': `url(${blog.imageUrl})`}}></div>
										<div className="caption">
											<h3>{blog.heading}</h3>
											<div className='row'>
												<div className='col-xs-4'> 
													<Link to = {`/blog/${blog.url}`} className='btn btn-default btn-md btn-arrow read-more-btn'><span>Read More<Icon/></span></Link>
												</div>
												<div className='col-xs-8'> 
													<FacebookShareButton
														url={baseUrl+blog.url}
														quote={blog.heading}
														className="facebook-blog-share">
														<FacebookIcon
															size={38} 
															round />
													</FacebookShareButton>
													<TwitterShareButton
														url={baseUrl+blog.url}
														title={blog.heading}
														className="twitter-blog-share">
														<TwitterIcon
															size={38} 
															round />
													</TwitterShareButton>
													<WhatsappShareButton
														url={baseUrl+blog.url}
														title={blog.heading}
														separator=" - A Blog on TEDx NIT Srinagar Website - "
														className="whatsapp-blog-share">
														<WhatsappIcon 
															size={38} 
															round />
													</WhatsappShareButton>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}

}

export default BlogView;