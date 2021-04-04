import Component, { ComponentId } from './components';

class Entity {
  public readonly id: number;

  private static sequence: number = 0;
  private components: Component[];

  constructor(public name: string = 'Entity') {
    this.id = Entity.sequence++;
    this.components = [];
  }

  public is(component: Component): void {
    const key = this.getKey(component);
    this.components[key] = component;
  }

  public isNot(component: Component) {
    const key = this.getKey(component);
    delete this.components[key];
  }

  public get<T extends Component>(name: ComponentId): T | null {
    return this.components[name];
  }

  public getComponentIds(): ComponentId[] {
    return Object.keys(this.components) as ComponentId[];
  }

  public isDrawable(): boolean {
    return Boolean(
      Object.values(this.components).find(
        (component: Component) => 'isDrawable' in component
      )
    );
  }

  public isTile(): boolean {
    return Boolean(
      Object.values(this.components).find(
        (component: Component) => 'isTile' in component
      )
    );
  }

  private getKey(component: Component): string {
    return component.id;
  }
}

export default Entity;
