import { Canvas } from '~engine';
import Input from './input';

interface Updater {
  update(input: Input, delta: number, canvas: Canvas): void;
}

export default Updater;
