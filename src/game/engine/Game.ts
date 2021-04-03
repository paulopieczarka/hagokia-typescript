import Canvas from './Canvas';
import Renderer from './Renderer';
import Updater from './Updater';

interface Scene extends Renderer, Updater {
  init(canvas: Canvas): void;
}

export default Scene;
