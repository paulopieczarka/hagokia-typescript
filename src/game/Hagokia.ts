import Canvas from './engine/Canvas';
import Game from './engine/Game';
import Graphics from './engine/graphics';
import Input from './engine/input';
import World from './world';

class Hagokia implements Game {
  private r: number = 0;

  private world: World;

  constructor() {
    this.world = new World();
  }

  init(canvas: Canvas): void {
    console.log('Game init.');
    this.world.init(canvas);
  }

  render(canvas: Canvas, g: Graphics): void {
    g.color('red').translate(64, 64).rotate(this.r).rect(-32, -32, 64, 64);
    g.color('yellow').rect(64, 64, 64, 64);

    this.world.render(canvas, g);
  }

  update(input: Input, delta: number): void {
    this.r += 0.05 * delta;

    this.world.update(input, delta);
  }
}

export default Hagokia;
