import { Canvas } from '~engine';
import { Placeable } from '~entities/components';
import Entity from '../entities';
import { Updater } from '../engine';
import Constants from '../Constants';
import Input from './input';

class Camera implements Updater {
  private target: Entity;

  constructor(
    public x: number = 0,
    public y: number = 0,
  ) {}

  public follow(entity: Entity): void {
    this.target = entity;
  }

  public update(input: Input, delta: number, canvas: Canvas): void {
    this.centerTargetIfExists(canvas);
  }

  private centerTargetIfExists(canvas: Canvas): void {
    if (!this.target) { return; }

    const { x, y } = this.target.get<Placeable>('Placeable');
    this.x = -x * Constants.TILE_SIZE + canvas.width/2;
    this.y = -y * Constants.TILE_SIZE + canvas.height/2;
  }
}

export default Camera;
