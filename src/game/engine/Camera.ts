import { Canvas } from '~engine';
import { Placeable } from '~entities/components';
import Entity from '../entities';
import { Updater } from '../engine';
import Constants from '../Constants';
import Input from './input';

class Camera implements Updater {
  private readonly THRESHOLD = 5.0;
  private readonly SPEED = 10.0;

  private target: Entity;
  private snap: boolean = true;

  constructor(
    public x: number = 0,
    public y: number = 0,
    private nextPosX: number = 0,
    private nextPosY: number = 0,
  ) {}

  public follow(entity: Entity): void {
    this.target = entity;
  }

  public update(input: Input, delta: number, canvas: Canvas): void {
    if (this.snap) { this.snapToTarget(canvas); }

    this.centerTargetIfExists(canvas);

    const dx = -this.nextPosX - this.x;
    const dy = -this.nextPosY - this.y;

    const length = Math.sqrt((dy*dy) + (dx*dx));
    const unitX = dx / length;
    const unitY = dy / length;

    if (length > this.THRESHOLD) {
      this.x += unitX * this.SPEED * delta;
      this.y += unitY * this.SPEED * delta;
    }
  }

  private centerTargetIfExists(canvas: Canvas): void {
    if (!this.target) { return; }

    const { x, y } = this.target.get<Placeable>('Placeable');
    this.nextPosX = x * Constants.TILE_SIZE - canvas.width/2 + Constants.TILE_SIZE/2;
    this.nextPosY = y * Constants.TILE_SIZE - canvas.height/2 + Constants.TILE_SIZE/2;
  }

  private snapToTarget(canvas: Canvas) {
    const { x, y } = this.target.get<Placeable>('Placeable');
    this.x = -x * Constants.TILE_SIZE + canvas.width/2 - Constants.TILE_SIZE/2;
    this.y = -y * Constants.TILE_SIZE + canvas.height/2 - Constants.TILE_SIZE/2;
    this.snap = false;
  }
}

export default Camera;
