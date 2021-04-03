import Canvas from './engine/Canvas';
import Game from './engine/Game';
import Graphics from './engine/graphics';
import Input from './engine/input';
import World from './world';

class Hagokia implements Game {
  private world: World;

  constructor() {
    this.world = new World();
  }

  init(canvas: Canvas): void {
    console.log('Game init.');
    this.world.init(canvas);
  }

  render(canvas: Canvas, g: Graphics): void {
    this.world.render(canvas, g);
  }

  update(input: Input, delta: number): void {
    this.world.update(input, delta);
  }
}

export default Hagokia;
