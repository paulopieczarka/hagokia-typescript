import { EntityFloor, EntityWall } from '../entities';
import Constants from '../Constants';
import World from './World';

class WorldMap {
  public static readonly NONE = 0;
  public static readonly FLOOR = 1;
  public static readonly WALL = 2;

  public spawnX: number;
  public spawnY: number;

  private map: number[][];

  constructor(public size: number = 128) {
    this.reset();
  }

  public setTile(x: number, y: number, type: number) {
    if (this.map[x] !== undefined && this.map[x][y] !== undefined) {
      this.map[x][y] = type;
    }
  }

  public getTile(x: number, y: number): number | null {
    return this.map[x] && this.map[x][y];
  }

  public setSpawn(x: number, y: number): void {
    this.spawnX = x;
    this.spawnY = y;
  }

  public registerComponents(world: World): void {
    this.map.forEach((row, x) => {
      row.forEach((id, y) => {
        if (id === WorldMap.WALL) {
          world.spawn(EntityWall.create(x, y))
          return;
        }

        if (id === WorldMap.FLOOR) {
          world.spawn(EntityFloor.create(x, y));
        }
      });
    });
  }

  public reset(): void {
    this.map = Array(this.size).fill(0).map(
      () => Array(this.size).fill(0).map(() => WorldMap.NONE)
    );
  }
}

export default WorldMap;
