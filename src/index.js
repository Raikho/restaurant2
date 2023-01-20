import './style.css';
import bgImage from './assets/samosa_platter.jpg';

const mainNode = document.querySelector('.container.main');
mainNode.style.backgroundImage = "url('" + bgImage + "')";
console.log(bgImage);
console.log(bgImage.src);


// DEBUG
console.log('index.js file has been loaded');
console.log('style.css file has been loaded');