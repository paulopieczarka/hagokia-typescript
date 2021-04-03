import Canvas from '../Canvas';

class Graphics {
  constructor(
    private canvas: Canvas,
    private ctx: CanvasRenderingContext2D,
  ) {}

  public save(): Graphics {
    this.ctx.save();
    return this;
  }

  public restore(): Graphics {
    this.ctx.restore();
    return this;
  }

  public translate(x: number, y: number): Graphics {
    this.ctx.translate(x, y);
    return this;
  }

  public rotate(deg: number): Graphics {
    this.ctx.rotate(deg);
    return this;
  }

  public color(color: string): Graphics {
    this.ctx.fillStyle = color;
    return this;
  }

  public rect(x: number, y: number, width: number, height: number): Graphics {
    this.ctx.fillRect(x, y, width, height);
    this.ctx.resetTransform();
    return this;
  }
}

export default Graphics;
