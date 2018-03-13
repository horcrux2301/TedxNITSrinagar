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
				<div className= 'container-fluid extend'>
					<div className=  'row- width-100' >
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
					</div>
				</div>
			);
		}
		else{
			console.log(`url(${this.state.data.imageUrl})`);
			return(
				<div className='container'>
					<div className='row blog-heading'>{this.state.data.heading}</div>
					<div className='row blog-main'>
						<div className='com-xs-12 blog-image' style={{'backgroundImage' : `url(${this.state.data.imageUrl})`}}></div>
						<div className='col-xs-12 blog-text'>
							{
								this.state.data.content.map((para) =>{
									return(
										<p>{para}</p>
									);
								})
							}
						</div>
					</div>
					{/* <div class="row">
						<div class="col-xs-12 col-sm-5">
							<img class="img-responsive" src="https://i.imgur.com/iy4hk3x.jpg'" width="100%"/>
						</div>
						<div class="col-xs-12 col-sm-7">
							<div class="row">
								<div class="col-sm-6">
									<h2>{this.state.data.heading}</h2>
								</div>
								<div class="col-sm-6">
									<h3 class="pull-right">
										yy
									</h3>
								</div>
							</div>  
        
						</div>
						<div class="col-xs-12">
							{this.state.data.content}
						</div>
					</div> */}
		
				</div>
			);
		}
	}

}

export default SingleBlogView;