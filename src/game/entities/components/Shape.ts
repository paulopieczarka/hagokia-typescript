import Constants from '../../Constants';
import Drawable from './Drawable';

class Shape extends Drawable {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    super('Shape');
    this.width = width * Constants.TILE_SIZE;
    this.height = height * Constants.TILE_SIZE;
  }
}

export default Shape;
