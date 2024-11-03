class Line {
  constructor(xStart, yStart, xEnd, yEnd) {
    this.xStart = xStart;
    this.yStart = yStart;
    this.xEnd = xEnd;
    this.yEnd = yEnd;
    this.angle = 0;
    this.radius = 10;
    this.hue = 0;
  }
  update() {
    let d = dist(this.xStart, this.yStart, this.xEnd, this.yEnd);
    let lineThickness = map(d, 0, width, 30, 0);

    strokeWeight(lineThickness);
    if (this.hue < 360) {
      this.hue += lineThickness * 10;
    } else {
      this.hue = 0;
    }

    console.log(this.hue);
  }

  draw() {
    line(this.xStart, this.yStart, this.xEnd, this.yEnd);
    stroke(`${this.hue}`, 100, 100);
  }
}
