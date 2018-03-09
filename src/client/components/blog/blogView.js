import React from 'react';
import Blogs from './blogData';
import {Link, NavLink} from 'react-router-dom';
import fire from '../../../../fire';
import addBlog from './addBlog';
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton, WhatsappShareButton, WhatsappIcon } from 'react-share';
import './blog.css';

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
		// addBlog();
	}

	render(){
		const baseUrl = 'http://www.tedxnitsrinagar.com/blog/';
		return(
			<div className='container-fluid'>
				<div className='row'>	
					{
						this.state.blogs === null 
						&&
						<div>
							Loading.
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
										<img src='/images/blog.jpg' alt="..."/>
										<div className="caption">
											<h3>{blog.heading}</h3>
											<div className='row'>
												<div className='col-md-3'> 
													<Link to = {`/blog/${blog.url}`}>
														<button className="btn btn-primary">Read More</button>
													</Link>
												</div>
												<div className='col-md-offset-3 col-md-6'> 
													<FacebookShareButton
														url={baseUrl+blog.url}
														quote={blog.heading}
														className="facebook-blog-share">
														<FacebookIcon
															size={30}
															round />
													</FacebookShareButton>
													<TwitterShareButton
														url={baseUrl+blog.url}
														title={blog.heading}
														className="twitter-blog-share">
														<TwitterIcon
															size={30}
															round />
													</TwitterShareButton>
													<WhatsappShareButton
														url={baseUrl+blog.url}
														title={blog.heading}
														separator=" - A Blog on Tedx NIT Srinagar Website - "
														className="whatsapp-blog-share">
														<WhatsappIcon 
															size={30} 
															round />
													</WhatsappShareButton>
													<a href='https://www.universe.com/events/tedxnitsrinagar-tickets-srinagar-Z4R597?buttonColor=#3A66E5&buttonText=Get Tickets' >Get Tickets</a>
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