import React from 'react';
import fire from '../../../../fire';
import addBlog from './addBlog';
import './blogSingle.css';

class SingleBlogView extends React.Component{
	constructor(){
		super();
		this.state = {
			data: null
		};
	}

	componentWillMount(){
		let location = this.props.location.pathname;
		const blog = location.slice(6,location.length);
		fire.database().ref('/blog-data/' +  blog).once('value').then((snapshot) => {
			console.log(snapshot.val());
			this.setState({
				data: snapshot.val()
			});
		})
			.catch( (exception) => {
				console.log(exception);
			});
	}

	render(){
		if(this.state.data===null){
			return(
				<div className='container'>
					Loading...
				</div>
			);
		}
		else{
			return(
				<div className='container'>
					<div className='row blog-heading'>{this.state.data.heading}</div>
					<div className='row blog-main'>
						<div className='blog-image'>{this.state.data.image}</div>
						<div className='blog-text'>
							{this.state.data.content}
						</div>
					</div>
				</div>
			);
		}
	}

}

export default SingleBlogView;