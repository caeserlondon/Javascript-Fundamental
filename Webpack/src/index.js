import laughing from './assets/laughing.svg';
import generatejoke from './generatejoke';
import './styles/main.scss';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

console.log(generatejoke());
