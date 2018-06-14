var shipx = 100;
var shipy = 350;
var xspeed = 100;
var yspeed = 100;
function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(25,150,28);
    ellipse(shipx, shipy, 80, 80);
    ellipse(shipx + 40, shipy - 50, 40, 40);
    ellipse(shipx + 100, shipy + 137, 60, 60);
    ellipse(shipx + 200, shipy - 150, 100, 100);
    ellipse(shipx - 20, shipy + 75, 30, 30);
    shipx = shipx + xspeed;
    shipy = shipy + yspeed
    
    if(shipx > width || shipx < 0) {
        xspeed = xspeed * -1;
    }
    
    if(shipy > height || shipy < 0) {
        yspeed = yspeed * -1;
    }
}