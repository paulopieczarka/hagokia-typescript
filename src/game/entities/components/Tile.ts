import Drawable from './Drawable';

class Tile extends Drawable {
  public readonly isTile: boolean = true;

  constructor() {
    super('Tile');
  }
}

export default Tile;



