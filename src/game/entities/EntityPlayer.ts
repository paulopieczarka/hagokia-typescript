import { Colorable, Placeable, Player, ShapeHuman, Movable } from './components';
import Entity from './Entity';

class EntityPlayer extends Entity {
  public static create(name: string = 'Player'): EntityPlayer {
    const player = new EntityPlayer(name);
    player.is(new Placeable(1, 1));
    player.is(new Colorable('green'));
    player.is(new ShapeHuman());
    player.is(new Player());
    player.is(new Movable());

    return player;
  }

  private constructor(name: string) {
    super(name);
  }
}

export default EntityPlayer;
