export { default } from './Component';
export { default as Placeable } from './Placeable';
export { default as Colorable } from './Colorable';
export { default as Shape } from './Shape';
export { default as ShapeHuman } from './ShapeHuman';
export { default as Drawable } from './Drawable';
export { default as Player } from './Player';
export { default as Tile } from './Tile';
export { default as Solid } from './Solid';
export { default as Movable } from './Movable';
export { default as Collidable } from './Collidable';

export type ComponentId =
  | 'Placeable'
  | 'Colorable'
  | 'Shape'
  | 'Player'
  | 'Tile'
  | 'Solid'
  | 'Movable'
  | 'Collidable'
;
