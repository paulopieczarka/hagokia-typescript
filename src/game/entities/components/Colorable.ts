import Component from './Component';

class Colorable extends Component {
  constructor(
    public color: string = 'hotpink',
  ) {
    super('Colorable');
  }
}

export default Colorable;
