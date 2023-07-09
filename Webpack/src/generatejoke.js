import axios from 'axios';

function generatejoke() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	axios.get('https://icanhazdadjoke.com', config);
}

export default generatejoke;
