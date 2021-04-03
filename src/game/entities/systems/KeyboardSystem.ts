import { ComponentId } from './../components';
import Input from '../../engine/input';
import Entity from '../Entity';
import System from './System';

class KeyboardSystem extends System {
  public static for(entity: Entity): KeyboardSystem {
    return new KeyboardSystem(entity);
  }

  public update(input: Input, delta: number): void {
  }

  public get requires (): ComponentId[] {
    return ['Placeable', 'Movable', 'Player'];
  }
}

export default KeyboardSystem;
