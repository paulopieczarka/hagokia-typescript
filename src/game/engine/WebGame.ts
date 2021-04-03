import Game from './Game'
import Canvas from './Canvas';
import Graphics from './graphics';
import Input from './input';

class WebGame {
  private canvas: Canvas;
  private ctx: CanvasRenderingContext2D;

  private graphics: Graphics;
  private input: Input;

  private game: Game;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = Canvas.fromHTMLCanvas(canvas);
    this.ctx = canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = true;
    this.ctx.imageSmoothingQuality = 'high';
  }

  public init(game: Game): void {
    this.game = game;
    this.graphics = new Graphics(this.canvas, this.ctx);

    this.game.init(this.canvas);
    this.requestAnimationFrame();
  }

  private gameLoop(): void {
    this.game.update(this.input, 1.0, this.canvas);

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.game.render(this.canvas, this.graphics);

    this.requestAnimationFrame();
  }

  private requestAnimationFrame(): void {
    window.requestAnimationFrame(this.gameLoop.bind(this));
  }
}

export default WebGame;
