const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
var compression = require('compression');
var MailChimpx = require('mailchimp-api-v3');

app.use(compression());

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/src/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/mailchimp',(req,res) => {
	let url =  '/lists/82beb634fd/';
	console.log(url);
	console.log(req.body);
	mailChimp.post(url, {
		members:[
			{
				email_address : req.body.email,
				status : 'subscribed',
				merge_fields: {
					MMERGE1: req.body.name
				},
			}
		]
	})
		.then(function(results) {
			console.log(results);
			let message = {
				message:'Success',
			};
			res.status(200).send(message);
		})
		.catch(function (err) {
			let message = {
				message:'Failed',
			};
			res.send(message);
		});
});

app.get('*', function response(req, res) {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

let mailChimpApiKey = '49f8396785b933284c7a878112ad9ca3-us17';
let mailChimpBaseUrl = 'https://us17.api.mailchimp.com/3.0';
var mailChimp = new MailChimpx(mailChimpApiKey);



app.listen(8082, () => console.log('Server started on port 8082'));