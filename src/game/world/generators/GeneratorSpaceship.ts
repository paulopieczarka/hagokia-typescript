import WorldMap from '../WorldMap';
import Generator from './Generator';

interface SpaceshipModel {
  name: string;
  spawn: { x: number, y: number };
  tiles: number[][];
};

class GeneratorSpaceship extends Generator {
  public static use(model: SpaceshipModel): GeneratorSpaceship {
    return new GeneratorSpaceship(model);
  }

  public generate(): WorldMap {
    const map: WorldMap = new WorldMap(this.size());
    map.setSpawn(this.model.spawn.x, this.model.spawn.y);

    for(let i=0; i < this.modelWidth(); i++) {
      for(let j=0; j < this.modelHeight(); j++) {
        map.setTile(i, j, this.model.tiles[i][j])
      }
    }

    return map;
  }

  private modelWidth(): number {
    return this.model.tiles.length;
  }

  private modelHeight(): number {
    return this.model.tiles[0].length;
  }

  private size(): number {
    return Math.max(this.modelWidth(), this.modelHeight());
  }

  private constructor(private model: SpaceshipModel) {
    super();
  }
}

export default GeneratorSpaceship;
