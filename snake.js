const board_border = 'black';
const board_background = "white";
const snake_col = 'lightblue';
const snake_border = 'darkblue';

let snake = [
  {x: 200, y: 200},
  {x: 190, y: 200},
  {x: 180, y: 200},
  {x: 170, y: 200},
  {x: 160, y: 200}
]

// Get the canvas element
const snakeboard = document.getElementById("snakeboard");
const snakeboard_ctx = snakeboard.getContext("2d");


main();
function main() {
    clearCanvas();
    drawSnake();
}

// draw a border around the canvas
function clearCanvas() {
  //  Select the colour to fill the drawing
  snakeboard_ctx.fillStyle = board_background;
  //  Select the colour for the border of the canvas
  snakeboard_ctx.strokestyle = board_border;
  snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}

// Draw the snake on the canvas
function drawSnake() {
  snake.forEach(drawSnakePart)
}

// Draw one snake part
function drawSnakePart(snakePart) {

  snakeboard_ctx.fillStyle = snake_col;
  snakeboard_ctx.strokestyle = snake_border;
  snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
