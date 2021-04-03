import Input from './input';

interface Updater {
  update(input: Input, delta: number): void;
}

export default Updater;
