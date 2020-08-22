const board_border = "black";
const board_background = "white";
const snake_col = "lightblue";
const snake_border = "darkblue";

let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 },
];

let dx = 10;
let dy = 0;

// Get the canvas element
const snakeboard = document.getElementById("snakeboard");
const snakeboard_ctx = snakeboard.getContext("2d");
main();

function main() {
  setTimeout(function onTick() {
    clear_board();
    move_snake();
    drawSnake();
    // Call main again
    main();
  }, 100);
}

// draw a border around the canvas
function clear_board() {
  //  Select the colour to fill the drawing
  snakeboard_ctx.fillStyle = board_background;
  //  Select the colour for the border of the canvas
  snakeboard_ctx.strokestyle = board_border;
  snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}

// Draw the snake on the canvas
function drawSnake() {
  snake.forEach(drawSnakePart);
}

// Draw one snake part
function drawSnakePart(snakePart) {
  snakeboard_ctx.fillStyle = snake_col;
  snakeboard_ctx.strokestyle = snake_border;
  snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function move_snake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  snake.pop();
}

function change_direction() {

    const LEFT_KEY = 37;
    const RIGHT_KEY = 39,
    const DOWN_KEY = 38,
    const UP_KEY = 40,


    const keyPressed = event.keyCode;
    const goingUP = dy === -10;
    const goingDOWN = dy === 10;
    const goingRIGHT = dx === 10;
    const goingLEFT = dx === -10;

}
