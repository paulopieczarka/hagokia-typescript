class Keyboard {
  public static readonly NONE = 0;
  public static readonly UP = 1;
  public static readonly DOWN = 2;
  public static readonly PRESSED = 3;

  constructor(public states: number[] = []) {
    this.createEventsListeners();
  }

  public pool(): void {
    Object.keys(this.states).forEach((key) => {
      this.states[key] = this.findNextState(key);
    });
  }

  private createEventsListeners(): void {
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  private onKeyDown({ key }: KeyboardEvent): void {
    if (this.states[key] === Keyboard.DOWN) {
      return;
    }

    this.states[key] = Keyboard.PRESSED;
  }

  private onKeyUp({ key }: KeyboardEvent): void {
    this.states[key] = Keyboard.UP;
  }

  private findNextState(key: string): number {
    switch (this.states[key]) {
      case Keyboard.UP:
        return Keyboard.NONE;
      case Keyboard.PRESSED:
      case Keyboard.DOWN:
        return Keyboard.DOWN;
      default:
        return Keyboard.PRESSED;
    }
  }
}

export default Keyboard;
