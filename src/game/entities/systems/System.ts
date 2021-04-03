import { ComponentId } from './../components';
import Entity from '../Entity';
import Canvas from '../../engine/Canvas';
import Graphics from '../../engine/graphics';
import Input from '../../engine/input';

const hasAllComponents = (a: ComponentId[], b: ComponentId[]) => (
  JSON.stringify(a.sort()) === JSON.stringify(b.sort())
);

class System {
  public static for(entity: Entity): System {
    return new System(entity);
  }

  public render(canvas: Canvas, g: Graphics): void {}

  public update(input: Input, delta: number, canvas: Canvas): void {}

  public shouldRun(): System | null {
    const entityComponents = this.entity.getComponentIds();
    if (hasAllComponents(entityComponents, this.requires)) {
      return this;
    }

    return null;
  }

  public get requires (): ComponentId[] {
    return [];
  }

  protected constructor(
    protected entity: Entity,
  ) {}
}

export default System;
