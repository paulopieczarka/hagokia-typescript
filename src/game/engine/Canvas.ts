class Canvas {
  public width: number = 800;
  public height: number = 600;

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
