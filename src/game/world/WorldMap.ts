import EntityTile from '../entities/EntityTile';
import { EntityFloor, EntityWall } from '../entities';
import World from './World';

class WorldMap {
  public static readonly FLOOR = 0;
  public static readonly WALL = 1;

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
    this.spawnX = x * EntityTile.SIZE;
    this.spawnY = y * EntityTile.SIZE;
  }

  public registerComponents(world: World): void {
    this.map.forEach((row, x) => {
      row.forEach((id, y) => {
        if (id === WorldMap.WALL) {
          world.spawn(EntityWall.create(x, y))
          return;
        }

        world.spawn(EntityFloor.create(x, y));
      });
    });
  }

  public reset(): void {
    this.map = Array(this.size).fill(0).map(
      () => Array(this.size).fill(0).map(() => WorldMap.FLOOR)
    );
  }
}

export default WorldMap;
