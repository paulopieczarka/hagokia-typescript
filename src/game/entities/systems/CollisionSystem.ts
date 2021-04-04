import { Collidable, Placeable } from '~entities/components';
import { Canvas } from '~engine';
import { ComponentId, Movable } from './../components';
import Input from '../../engine/input';
import Entity from '../Entity';
import System from './System';

class CollisionSystem extends System {
  private entities: Entity[];

  public static for(entity: Entity): CollisionSystem {
    return new CollisionSystem(entity);
  }

  public with(entities: Entity[]): CollisionSystem {
    this.entities = entities;
    return this;
  }

  public update(input: Input, delta: number, canvas: Canvas): void {
    const position = this.getPosition();
    this.entities.forEach((entity) => {
      if (entity.id === this.entity.id) { return; }
      const pos = entity.get<Placeable>('Placeable');
      const dx = pos.x - position.x;
      const dy = pos.y - position.y;
      
      if (Math.sqrt(dx*dx + dy*dy) <= 0) {
        console.log(this.entity.name, 'collided with', entity.name);

        const mover = this.getMovement();
        if (mover) {
          position.x = mover.lastPosX;
          position.y = mover.lastPosY;
        }
      }
    });
  }

  public get requires (): ComponentId[] {
    return ['Placeable', 'Collidable'];
  }

  private getMovement(): Movable {
    return this.entity.get<Movable>('Movable');
  }

  private getPosition(): Placeable {
    return this.entity.get<Placeable>('Placeable');
  }
}

export default CollisionSystem;
