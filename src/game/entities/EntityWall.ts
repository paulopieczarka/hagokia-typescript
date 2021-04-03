import { Colorable, Solid } from './components';
import EntityTile from './EntityTile';

class EntityWall extends EntityTile {
  public static readonly SIZE: number = 32;

  public static create(x: number, y: number): EntityWall {
    const tile = EntityTile.create(x, y);
    tile.is(new Colorable('blue'));
    tile.is(new Solid());
    return tile;
  }
}

export default EntityWall;
