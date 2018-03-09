const express = require('express');
const path = require('path');
const app = express();
var compression = require('compression');

app.use(compression());

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/src/public'));

app.get('*', function response(req, res) {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(8081, () => console.log('Server started on port 8081'));