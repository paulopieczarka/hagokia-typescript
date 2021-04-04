import { Collidable, Colorable, Solid } from './components';
import Entity from './Entity';
import EntityTile from './EntityTile';

class EntityWall extends EntityTile {
  public static readonly SIZE: number = 32;

  public static create(x: number, y: number): EntityWall {
    const tile = EntityTile.create(x, y);
    tile.is(new Colorable('blue'));
    tile.is(new Solid());
    tile.is(new Collidable());

    return tile;
  }
}

export default EntityWall;
