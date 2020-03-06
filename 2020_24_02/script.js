function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}


function Rect(x, y, width, height, color) {
    Figure.call(this, x, y, color);
    this.width = width;
    this.height = height;

    this.draw = function(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
	  ctx.fillRect(this.x, this.y, this.width, this.height);

	}

}


function Circle(x, y, r, color) {
    Figure.call(this, x, y, color);
    this.r = r;

    this.draw = function(ctx) {
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      ctx.stroke();
	}
}

function Canvas(width, height) {
    let canvas = document.getElementById('canvasID');
    let ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    this.add = function() {
        for (let i = 0; i < arguments.length; i++) {
                arguments[i].draw(ctx);
        }
    }
}


function Line(x1, y1, x2, y2, color) {
    Figure.call(this, null, null, color);
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.draw = function(ctx) {
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(this.x1, this.y1);
      ctx.lineTo(this.x2, this.y2);
      ctx.stroke();
    };
}

var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color

var drawArea = new Canvas(800, 800);
drawArea.add(line);
drawArea.add(circle, rect);


