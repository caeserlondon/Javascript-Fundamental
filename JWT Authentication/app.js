const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
	res.json({
		message: 'Welcome to the API',
	});
});

app.post('/api/posts', (req, res) => {
	res.json({
		message: 'Post created successfully...',
	});
});

app.post('/api/login', (req, res) => {
	// Mock user
	const user = {
		id: 1,
		username: 'caeser',
		email: 'caeser@gmail.com',
	};

	//Asynchronous Sign using callback
	jwt.sign({ user }, 'secretkey', (err, token) => {
		res.json({
			// token: token, ES5
			token,
		});
	});
});

app.listen(5001, () => console.log('Server started on port 5000'));
