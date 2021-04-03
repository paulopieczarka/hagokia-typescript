import Canvas from './Canvas';
import Graphics from './graphics';

interface Renderer {
  render(canvas: Canvas, g: Graphics): void;
}

export default Renderer;
