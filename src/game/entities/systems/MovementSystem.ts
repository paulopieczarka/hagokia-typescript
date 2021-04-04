import { Placeable } from '~entities/components';
import { Canvas } from '~engine';
import { ComponentId, Movable } from './../components';
import Input from '../../engine/input';
import Entity from '../Entity';
import System from './System';

class MovementSystem extends System {
  public static for(entity: Entity): MovementSystem {
    return new MovementSystem(entity);
  }

  public update(input: Input, delta: number, canvas: Canvas): void {
    const movement = this.getMovement();
    if (movement.hasMovement()) {
      const position = this.getPosition();
      movement.lastPosX = position.x;
      movement.lastPosY = position.y;
      position.x += movement.moveToX;
      position.y += movement.moveToY;
      movement.reset();
    }
  }

  public get requires (): ComponentId[] {
    return ['Placeable', 'Movable'];
  }

  private getMovement(): Movable {
    return this.entity.get<Movable>('Movable');
  }

  private getPosition(): Placeable {
    return this.entity.get<Placeable>('Placeable');
  }
}

export default MovementSystem;
