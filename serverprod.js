const express = require('express');
const path = require('path');
const app = express();
var compression = require('compression');
var MailChimpx = require('mailchimp-api-v3');
let mailChimpApiKey = '49f8396785b933284c7a878112ad9ca3-us17';
let mailChimpBaseUrl = 'https://us17.api.mailchimp.com/3.0';
var mailChimp = new MailChimpx(mailChimpApiKey);

app.use(compression());

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/src/public'));

app.get('*', function response(req, res) {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use('/mailchimp',(req,res) => {
	let url =  '/lists/82beb634fd/';
	console.log(url);
	mailChimp.post(url, {
		members:[
			{
				email_address : req.body.email,
				status : 'subscribed',
				merge_fields: {
					MMERGE1: req.body.name,
					MMERGE2: req.body.text,
				},
			}
		]
	})
		.then(function(results) {
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

app.listen(80, () => console.log('Server started on port 80'));