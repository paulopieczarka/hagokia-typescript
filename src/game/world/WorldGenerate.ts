import WorldMap from './WorldMap';

class WorldGenerate {
  public static generate(size: number = 128): WorldMap {
    const map: WorldMap = new WorldMap(size);
    this.generateBaseFloor(map);
    this.findSpawnPosition(map);

    return map;
  }

  private static generateBaseFloor(map: WorldMap): void {
    for(let i=0; i < map.size; i++) {
      for(let j=0; j < map.size; j++) {
        const isFloor = Math.random() > 0.5;
        const tile = isFloor ? WorldMap.FLOOR : WorldMap.WALL;
        map.setTile(i, j, tile);
      }
    }
  }

  private static findSpawnPosition(map: WorldMap) {
    map.setSpawn(1, 1);
  }
}

export default WorldGenerate;
