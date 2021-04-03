import { Colorable, Placeable, Shape, Tile } from './components';
import Entity from './Entity';

class EntityTile extends Entity {
  public static readonly SIZE: number = 32;

  public static create(x: number, y: number): EntityTile {
    const tile = new EntityTile();
    tile.is(new Tile());
    tile.is(new Shape(this.SIZE, this.SIZE));
    tile.is(new Placeable(x * this.SIZE, y * this.SIZE));

    return tile;
  }

  constructor() {
    super('Tile');
  }
}

export default EntityTile;
