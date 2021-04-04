import Entity, { EntityPlayer } from '../entities';
import { CollisionSystem, KeyboardSystem, MovementSystem, RendererSystem } from '../entities/systems';
import { Canvas, Renderer, Updater } from '../engine';
import Input from '../engine/input';
import Graphics from '../engine/graphics';
import WorldGenerate from './WorldGenerate';
import { Collidable, Placeable } from '~entities/components';
import WorldMap from './WorldMap';

class World implements Renderer, Updater {
  protected map: WorldMap;
  protected player: Entity;

  private entities: Entity[];
  private drawable: Entity[];
  private colliable: Entity[];

  constructor(public name: string = 'World') {
    this.entities = [];
    this.drawable = [];
    this.colliable = [];
  }

  public init(canvas: Canvas): void {
    this.map = WorldGenerate.generate(120);
    this.map.registerComponents(this);
    this.addPlayer();
  }

  public render(canvas: Canvas, g: Graphics): void {
    this.drawable.forEach((entity) => {
      RendererSystem.for(entity).render(canvas, g);
    });
  }

  public update(input: Input, delta: number, canvas: Canvas): void {
    this.entities.forEach((entity) => {
      KeyboardSystem.for(entity).shouldRun()?.update(input, delta, canvas);
      MovementSystem.for(entity).shouldRun()?.update(input, delta, canvas);
      CollisionSystem.for(entity).with(this.colliable).shouldRun()?.update(input, delta, canvas);
    });
  }

  public spawn(entity: Entity, x?: number, y?: number): void {
    if (x !== undefined && y !== undefined) {
      const position = entity.get<Placeable>('Placeable');
      position?.set(x, y);
    }

    if (entity.get<Collidable>('Collidable')) {
      this.colliable[entity.id] = entity;
    }

    if (entity.isDrawable()) {
      this.draw(entity);
    }

    this.entities[entity.id] = entity;
  }

  public getPlayer(): EntityPlayer {
    return this.player;
  }

  protected addPlayer(): void {
    const { spawnX, spawnY } = this.map;
    this.player = EntityPlayer.create('Vornian');
    this.spawn(this.player, spawnX, spawnY);
  }

  private draw(entity: Entity): void {
    if (entity.isTile()) {
      this.drawable.unshift(entity);
      return;
    }

    this.drawable.push(entity);
  }
}

export default World;
