import WebGame from './engine/WebGame';
import Hagokia from './Hagokia';

const canvas = document.getElementById('canvas'); 
const webGame = new WebGame(canvas as HTMLCanvasElement);
webGame.init(new Hagokia());
