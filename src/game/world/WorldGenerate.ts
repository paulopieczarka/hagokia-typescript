import WorldRoom, { Room } from './WorldRoom';
import WorldMap from './WorldMap';

class WorldGenerate {
  public static generate(size: number = 128): WorldMap {
    const map: WorldMap = new WorldMap(size);
    this.generateRooms(map);

    return map;
  }

  private static generateRooms(map: WorldMap): void {
    const rooms: Room[][] = Array(2).fill(0).map(() => Array(2));
    
    const spawnPoints = [
      { x: Math.round(map.size/2) - 5, y: Math.round(map.size/2) - 5, direction: null },
    ];
    const roomPoints = [Object.values(spawnPoints[0]).join(',')];

    map.setSpawn(spawnPoints[0].x + 5, spawnPoints[0].y + 5);

    while (spawnPoints.length > 0) {
      const { x, y, direction } = spawnPoints.shift();

      if (roomPoints.includes([x, y].join(','))) {
        continue;
      }

      const room = direction ? WorldRoom.getRandomRoom(direction) : WorldRoom.CENTER;
      this.placeRoom(x, y, room, map);
      roomPoints.push([x, y].join(','));

      if (room.doors.top) {
        spawnPoints.push({ x, y: y - 10, direction: 'bottom' });
      }

      if (room.doors.bottom) {
        spawnPoints.push({ x, y: y + 10, direction: 'top' });
      }

      if (room.doors.left) {
        spawnPoints.push({ x: x - 10, y, direction: 'right' });
      }

      if (room.doors.right) {
        spawnPoints.push({ x: x + 10, y, direction: 'left' });
      }
    }
  }

  private static placeRoom(x: number, y: number, room: Room, map: WorldMap) {
    for(let i=0; i < 11; i++) {
      for(let j=0; j < 11; j++) {
        const isFloor = room.tiles[j][i] === 0;
        const tile = isFloor ? WorldMap.FLOOR : WorldMap.WALL;
        map.setTile(x + i, y + j, tile);
      }
    }
  }
}

export default WorldGenerate;
