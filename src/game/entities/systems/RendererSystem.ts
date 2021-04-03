import Constants from '../../Constants';
import Canvas from '../../engine/Canvas';
import Graphics from '../../engine/graphics';
import { Colorable, Placeable, Shape, ComponentId } from '../components';
import Entity from '../Entity';
import System from './System';

class RendererSystem extends System {
  public static for(entity: Entity): RendererSystem {
    return new RendererSystem(entity);
  }

  public render(canvas: Canvas, g: Graphics): void {
    const color = this.getColor();
    const { x, y } = this.getPosition();
    const { width, height } = this.getSizes();

    const renderPosX = Math.round(x * Constants.TILE_SIZE + canvas.camera?.x);
    const renderPosY = Math.round(y * Constants.TILE_SIZE + canvas.camera?.y);
    g.color(color).translate(renderPosX, renderPosY).rect(0, 0, width, height);
  }

  public get requires (): ComponentId[] {
    return ['Placeable', 'Shape'];
  }

  private getColor(): string {
    return this.entity.get<Colorable>('Colorable')?.color || 'white';
  }

  private getPosition(): Placeable {
    return this.entity.get<Placeable>('Placeable');
  }

  private getSizes(): Shape {
    return this.entity.get<Shape>('Shape');
  }
}

export default RendererSystem;
