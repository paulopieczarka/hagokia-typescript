import Component from './Component';

class Movable extends Component {
  constructor(
    public moveToX: number = 0,
    public moveToY: number = 0,
  ) {
    super('Movable');
  }

  public moveTo(x: number, y: number) {
    this.moveToX = x;
    this.moveToY = y;
  }

  public hasMovement(): boolean {
    return Boolean(this.moveToX || this.moveToY );
  }

  public reset(): void {
    this.moveToX = 0;
    this.moveToY = 0;
  }
}

export default Movable;