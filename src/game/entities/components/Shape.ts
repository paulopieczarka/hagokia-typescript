import Drawable from './Drawable';

class Shape extends Drawable {
  constructor(
    public width: number,
    public height: number,
  ) {
    super('Shape');
  }
}

export default Shape;
