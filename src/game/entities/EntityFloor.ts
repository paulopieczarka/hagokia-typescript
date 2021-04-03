import { Colorable } from './components';
import EntityTile from './EntityTile';

class EntityFloor extends EntityTile {
  public static readonly SIZE: number = 32;

  public static create(x: number, y: number): EntityFloor {
    const tile = EntityTile.create(x, y);
    tile.is(new Colorable('hotpink'));
    return tile;
  }
}

export default EntityFloor;
