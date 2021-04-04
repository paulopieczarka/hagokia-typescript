import { Canvas } from '~engine';
import { GeneratorSpaceship } from '../generators';
import World from '../World';
import daedalus from './models/daedalus';

class Spaceship extends World {
  constructor(name: string = 'My Ship') {
    super(name);
  }

  public init(canvas: Canvas): void {
    this.map = GeneratorSpaceship.use(daedalus).generate();
    this.map.registerComponents(this);
    this.addPlayer();
  }
}

export default Spaceship;
