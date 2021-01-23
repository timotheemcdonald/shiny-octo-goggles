const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
    x: 200,
    y: 200,
    width: 40,
    height: 72,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "chewie.png";
const background = new Image();
background.src = "background.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);

}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("keydown", function(e){
    keys[e.key] = true;
    console.log(e.key)
});

window.addEventListener("keyup", function(e){
    delete keys[e.key]
});

function movePlayer(){
    if(keys['ArrowUp'] && player.y > 100){
        player.y -= player.speed;
        player.frameY = 3;
    }
    if(keys['ArrowLeft'] && player.x > 0 ){
        player.x -= player.speed;
        player.frameY = 1;
    }
    if(keys['ArrowDown'] && player.y < canvas.height - player.height){
        player.y += player.speed;
        player.frameY = 0;
    }
    if(keys['ArrowRight'] && player.x < canvas.width - player.width){
        player.x += player.speed;
        player.frameY = 2;
    }
}