import fire from '../../../../fire';


const addBlog = () => {
	fire.database().ref('/blogs/' + 'why-come-to-srinagar').set({
		url: 'why-come-to-srinagar',
	});
	fire.database().ref('/blog-data/' + 'why-come-to-srinagar').set({
		heading: 'Why Come To Srinagar',
		imageUrl: 'xx',
		content: 'This is the content of the blog'
	});
};

export default addBlog;