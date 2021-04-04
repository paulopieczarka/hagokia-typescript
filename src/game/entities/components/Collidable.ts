import Component from './Component';

class Collidable extends Component {
  constructor(private radius: number = 1) {
    super('Collidable');
  }
}

export default Collidable;