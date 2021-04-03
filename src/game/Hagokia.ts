import { Canvas, Game, Camera } from './engine';
import Graphics from './engine/graphics';
import Input from './engine/input';
import World from './world';

class Hagokia implements Game {
  private world: World;
  private camera: Camera;

  constructor() {
    this.world = new World();
    this.camera = new Camera();
  }

  init(canvas: Canvas): void {
    console.log('Game init.');

    this.world.init(canvas);

    canvas.useCamera(this.camera);
    this.camera.follow(this.world.getPlayer());
  }

  render(canvas: Canvas, g: Graphics): void {
    this.world.render(canvas, g);
  }

  update(input: Input, delta: number, canvas: Canvas): void {
    this.world.update(input, delta, canvas);
    this.camera.update(input, delta, canvas);
  }
}

export default Hagokia;
