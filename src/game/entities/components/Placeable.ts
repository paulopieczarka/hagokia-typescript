import Component from './Component';

class Placeable extends Component {
  constructor(
    public x: number = 0,
    public y: number = 0,
  ) {
    super('Placeable');
  }

  public set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export default Placeable;