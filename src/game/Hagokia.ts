import { Canvas, Game, Camera } from './engine';
import Graphics from './engine/graphics';
import Input from './engine/input';
import { WorldManager } from './world';

class Hagokia implements Game {
  private worldManager: WorldManager;
  private camera: Camera;

  constructor() {
    this.worldManager = new WorldManager();
    this.camera = new Camera();
  }

  init(canvas: Canvas): void {
    console.log('Game init.');

    this.worldManager.init(canvas);

    canvas.useCamera(this.camera);
    this.camera.follow(this.worldManager.getPlayer());
  }

  render(canvas: Canvas, g: Graphics): void {
    this.worldManager.render(canvas, g);
  }

  update(input: Input, delta: number, canvas: Canvas): void {
    this.worldManager.update(input, delta, canvas);
    this.camera.update(input, delta, canvas);
  }
}

export default Hagokia;
