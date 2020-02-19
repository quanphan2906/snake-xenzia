width = 20;
unit = 20;
snake = [];
head_x = 10; head_y = 10;
snake_len = 1;
// snake.push({x:10, y:10});
delta_x = 0; delta_y = 0;
food_x = 15; food_y = 15;


window.onload = function(){
    canv = document.getElementById("game");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", button_handle);
    set = setInterval(game, 100);
}

function button_handle(key){
    console.log(key);
    switch(key.keyCode){
        case 37: //trai
            delta_x = -1; delta_y = 0;
            console.log("nhan arrow trai");
            break;
        case 38: //len
            delta_x = 0; delta_y = -1; 
            break;
        case 39: //phai
            delta_x = 1; delta_y = 0;
            break;
        case 40: //xuong
            delta_x = 0; delta_y = 1;
            break;
    }
}

function game(){
    
    head_x = head_x + delta_x;
    head_y = head_y + delta_y;
    if (head_x < 0){
        head_x = width - 1;
    }
    if (head_y < 0){
        head_y = width - 1;
    }
    if (head_x > width - 1){
        head_x = 0;
    }
    if (head_y > width -1){
        head_y = 0;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);
    snake.push({x:head_x, y:head_y});
    while (snake.length > snake_len){
        snake.shift();
    }
    for (var i=0; i < snake_len; i++){
        ctx.fillStyle = "yellow";
        ctx.fillRect(snake[i].x*unit, snake[i].y*unit, unit-2, unit-2);
        console.log(head_x, head_y);
        console.log("-----")
        console.log(snake[i].x, snake[i].y);
        console.log("-----");
        console.log(snake_len);
        console.log("-------------------")
        if (snake[i].x == head_x && snake[i].y == head_y && snake.length >=3 && i!= snake.length-1){
            clearInterval(set);
        }
    }
    if(head_x==food_x && head_y==food_y){
        snake_len++;
        food_x=Math.floor(Math.random()*width);
        food_y=Math.floor(Math.random()*width);
    }
    ctx.fillStyle="red";
    ctx.fillRect(food_x*unit, food_y*unit, unit-2, unit-2);
}