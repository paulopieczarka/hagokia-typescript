import Keyboard from './Keyboard';

class Input {
  public keyboard: Keyboard;

  constructor() {
    this.keyboard = new Keyboard();
    console.log('Inputs init.')
  }

  public isKeyDown(key: string): boolean {
    return false;
  }

  public isKeyUp(key: string): boolean {
    return false;
  }

  public isKeyPressed(key: string): boolean {
    return this.keyboard.states[key] === Keyboard.PRESSED;
  }
}

export default Input;
