import Component from './Component';

class Movable extends Component {
  public moveToX: number;
  public moveToY: number;

  constructor() {
    super('Movable');
  }

  public moveTo(x: number, y: number) {
    this.moveToX = x;
    this.moveToY = y;
  }
}

export default Movable;