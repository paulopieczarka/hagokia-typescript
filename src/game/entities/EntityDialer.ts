import { Colorable, Placeable, Shape } from './components';
import Entity from './Entity';

class EntityDialer extends Entity {
  public static create(): EntityDialer {
    const dialer = new EntityDialer('Dialer');
    dialer.is(new Placeable(1, 1));
    dialer.is(new Colorable('cyan'));
    dialer.is(new Shape(1, 1));
    return dialer;
  }

  private constructor(name: string) {
    super(name);
  }
}

export default EntityDialer;
