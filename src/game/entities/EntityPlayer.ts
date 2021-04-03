import { Colorable, Placeable, Player, ShapeHuman } from './components';
import Entity from './Entity';
import EntityTile from './EntityTile';

class EntityPlayer extends Entity {
  public static create(name: string = 'Player'): EntityPlayer {
    const player = new EntityPlayer(name);
    player.is(new Placeable(1 * EntityTile.SIZE, 1 * EntityTile.SIZE));
    player.is(new Colorable('green'));
    player.is(new ShapeHuman());
    player.is(new Player());

    return player;
  }

  private constructor(name: string) {
    super(name);
  }
}

export default EntityPlayer;
