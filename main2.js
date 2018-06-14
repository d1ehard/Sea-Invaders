// player controlled
var sprites = [];
var score = 0;
var playerTeam = 1;
var enemyTeam = 2;
var player;


function setup() {
    createCanvas(600, 400);

    for (var i = 0; i < 10; i++) {
        sprites.push(new Enemy(random(width), random(-500, 0), enemyTeam));
    }
    player = new Ship(playerTeam)
    sprites.push(new Shooter(width/2, 5, enemyTeam));
    sprites.push(player);
    console.log(sprites.length);
}

function draw() {
    background(20, 125, 200);
    fill(255);
    textSize(32);
    strokeWeight(1);
    text(score, 50, 50);
    if(score == 12){
        background(0);
         text("Victory", width / 2, height / 2);
        noLoop();
    }

    for (var i = 0; i < sprites.length; i++) {
        sprites[i].display();
        sprites[i].control();
        for (var j = 0; j < sprites.length; j++) {
            // if they exist
            if (sprites[i] && sprites[j]) {
                var a = sprites[i];
                var b = sprites[j];
                if (a.team !== b.team && a.isColliding(b)) {
                    a.handleCollision();
                    b.handleCollision();
                }
            }
        }
    }
}
