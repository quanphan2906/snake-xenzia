width = 20;
unit = 20;
snake = [];
head_x = 10; head_y = 10;
snake.push({x:head_x, y:head_y});
snake_len = 1;
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
    for(var i=0; i<snake_len;i++){
        snake[i].x = snake[i].x + delta_x;
    }
    for(var i=0; i<snake_len;i++){
        snake[i].y = snake[i].y + delta_y;
    }

    head_x = head_x + delta_x;
    head_y = head_y + delta_y;
    head_x_old = head_x;
    head_y_old = head_y;

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
    for (var i=0; i < snake_len; i++){
        ctx.fillStyle = "yellow";
        ctx.fillRect(snake[i].x*unit, snake[i].y*unit, unit-2, unit-2);
    }

    ctx.fillStyle="red";
    ctx.fillRect(food_x*unit, food_y*unit, unit-2, unit-2);
    
    if(head_x==food_x && head_y==food_y){
        snake_len++;
        if (head_x_old < food_x)  snake.push({x: head_x-1, y: head_y})
        else{
            if (head_x_old > food_x) snake.push({x: head_x+1, y: head_y})
            else{
                if (head_y_old < food_y) snake.push({x: head_x, y: head_y-1})
                else snake.push({x: head_x, y: head_y+1})
            }
        }
        
        food_x=Math.floor(Math.random*width);
        food_y=Math.floor(Math.random*width);
        ctx.fillStyle="red";
        ctx.fillRect(food_x*unit, food_y*unit, unit-2, unit-2);
    }

}