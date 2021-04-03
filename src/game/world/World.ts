import Entity, { EntityPlayer, EntityTile } from '../entities';
import { KeyboardSystem, RendererSystem } from '../entities/systems';
import { Canvas, Renderer, Updater } from '../engine';
import Input from '../engine/input';
import Graphics from '../engine/graphics';
import WorldGenerate from './WorldGenerate';
import { Placeable } from '~entities/components';
import WorldMap from './WorldMap';

class World implements Renderer, Updater {
  private entities: Entity[];
  private entitiesToDraw: Entity[];
  private map: WorldMap;

  constructor() {
    this.entities = [];
    this.entitiesToDraw = [];
  }

  public init(canvas: Canvas): void {
    this.map = WorldGenerate.generate(32);
    this.map.registerComponents(this);

    const { spawnX, spawnY } = this.map;
    this.spawn(EntityPlayer.create('Vornian'), spawnX, spawnY);
  }

  public render(canvas: Canvas, g: Graphics): void {
    this.entitiesToDraw.forEach((entity) => {
      RendererSystem.for(entity).render(canvas, g);
      this.entitiesToDraw.shift();
    });
  }

  public update(input: Input, delta: number): void {
    this.entities.forEach((entity) => {
      KeyboardSystem.for(entity).shouldRun()?.update(input, delta);

      if (entity.isDrawable()) {
        this.draw(entity);
      }
    });
  }

  public spawn(entity: Entity, x?: number, y?: number): void {
    if (x !== undefined && y !== undefined) {
      const position = entity.get<Placeable>('Placeable');
      position?.set(x, y);
    }

    this.entities[entity.id] = entity;
  }

  private draw(entity: Entity): void {
    this.entitiesToDraw.push(entity);
  }
}

export default World;
