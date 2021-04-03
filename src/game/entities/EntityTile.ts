import { Placeable, Shape, Tile } from './components';
import Entity from './Entity';

class EntityTile extends Entity {
  public static create(x: number, y: number): EntityTile {
    const tile = new EntityTile();
    tile.is(new Tile());
    tile.is(new Shape(1, 1));
    tile.is(new Placeable(x, y));

    return tile;
  }

  constructor() {
    super('Tile');
  }
}

export default EntityTile;
