import Camera from './Camera';

class Canvas {
  public width: number = 800;
  public height: number = 600;
  public camera: Camera;

  public static fromHTMLCanvas(htmlCanvas: HTMLCanvasElement): Canvas {
    const { width, height } = htmlCanvas;
    const canvas = new Canvas(width, height);

    const onWindowResize = (): void => {
      htmlCanvas.width = window.innerWidth;
      htmlCanvas.height = window.innerHeight;
      canvas.onWindowResize();
    };

    window.addEventListener('resize', onWindowResize.bind(this));
    onWindowResize();

    return canvas;
  }

  public useCamera(camera: Camera): Canvas {
    this.camera = camera;
    return this;
  }

  private constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  protected onWindowResize(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
}

export default Canvas;
