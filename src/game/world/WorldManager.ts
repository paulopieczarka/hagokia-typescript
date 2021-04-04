import { Renderer, Updater, Canvas } from '~engine';
import Graphics from '~engine/graphics';
import Input from '~engine/input';
import { EntityPlayer } from '~entities';
import Spaceship from './spaceship';
import World from './World';

class WorldManager implements Renderer, Updater {
  private worlds: Map<string, World>;
  private current: World;

  constructor() {
    this.worlds = new Map<string, World>();
  }

  public init(canvas: Canvas): void {
    this.createAndInitSpaceship(canvas);
  }

  public render(canvas: Canvas, g: Graphics): void {
    this.current?.render(canvas, g);

    g.color('white').text('center', 0, this.current?.name);
  }

  public update(input: Input, delta: number, canvas: Canvas): void {
    this.current?.update(input, delta, canvas);
  }

  public getPlayer(): EntityPlayer {
    return this.current?.getPlayer();
  }

  private createAndInitSpaceship(canvas: Canvas): void {
    this.worlds['spaceship'] = new Spaceship();
    this.worlds['spaceship'].init(canvas);
    this.current = this.worlds['spaceship'];
  }
}

export default WorldManager;
