import { ComponentId } from './../components';
import Updater from '../../engine/Updater';
import Input from '../../engine/input';
import Entity from '../Entity';
import System from './System';

class KeyboardSystem extends System implements Updater {
  public static for(entity: Entity): KeyboardSystem {
    return new KeyboardSystem(entity);
  }

  public update(input: Input, delta: number): void {
  }

  public get requires (): ComponentId[] {
    return ['Placeable', 'Player'];
  }
}

export default KeyboardSystem;
