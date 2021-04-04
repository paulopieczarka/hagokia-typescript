import World from '~world';
import WorldMap from '../WorldMap';
import Generator from './Generator';
import * as Entities from '../../entities';

interface SpaceshipEntity {
  x: number;
  y: number;
  name: string;
}

interface SpaceshipModel {
  name: string;
  spawn: { x: number, y: number };
  tiles: number[][];
  entities?: SpaceshipEntity[];
};

class GeneratorSpaceship extends Generator {
  private model: SpaceshipModel

  public static for(world: World): GeneratorSpaceship {
    return new GeneratorSpaceship(world);
  }

  public use(model: SpaceshipModel): GeneratorSpaceship {
    this.model = model;
    return this;
  }

  public generate(): WorldMap {
    const map: WorldMap = new WorldMap(this.size());
    this.generateFromTemplate(map);
    this.generateEntities(map);

    return map;
  }

  private generateFromTemplate(map: WorldMap): void {
    map.setSpawn(this.model.spawn.x, this.model.spawn.y);

    for(let i=0; i < this.modelWidth(); i++) {
      for(let j=0; j < this.modelHeight(); j++) {
        map.setTile(i, j, this.model.tiles[i][j])
      }
    }
  }

  private generateEntities(map: WorldMap): void {
    this.model.entities?.map(({ name, x, y }) => {
      this.world.spawn(Entities[name].create(), x, y);
    });
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

  private constructor(private world: World) {
    super();
  }
}

export default GeneratorSpaceship;
