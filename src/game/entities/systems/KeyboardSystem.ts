import { Canvas } from '~engine';
import { ComponentId, Movable } from './../components';
import Input from '../../engine/input';
import Entity from '../Entity';
import System from './System';

class KeyboardSystem extends System {
  public static for(entity: Entity): KeyboardSystem {
    return new KeyboardSystem(entity);
  }

  public update(input: Input, delta: number, canvas: Canvas): void {
    if (input.isKeyPressed('w')) {
      this.moveEntity(0, -1);
    }
    else if (input.isKeyPressed('s')) {
      this.moveEntity(0, 1);
    }
    else if (input.isKeyPressed('a')) {
      this.moveEntity(-1, 0);
    }
    else if (input.isKeyPressed('d')) {
      this.moveEntity(1, 0);
    }
  }

  public get requires (): ComponentId[] {
    return ['Placeable', 'Movable', 'Player'];
  }

  private moveEntity(x: number, y: number) {
    const mover = this.entity.get<Movable>('Movable');
    mover.moveTo(x, y);
  }
}

export default KeyboardSystem;
