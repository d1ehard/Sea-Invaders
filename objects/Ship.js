function Ship(team) {
    //explicit reference to self
    var self = this;

    self.x = width / 2;
    self.y = height - 50;
    self.size = 35;
    self.size2 = 15;
    self.speed = 2;
    self.team = team;
    self.canShoot = true;
    self.delay = 200;
    self.armor = 3;


    self.handleCollision = function () {
        if(self.armor > 0){
            self.armor -= 1;
        } else {
            background(0);
        textSize(56);
        fill(255);
        text("Game Over", width / 2, height / 2);
        text(score, width / 2, 2 * height / 3);
        noLoop();
        }
    }

    self.isColliding = function (other) {
        var distance = dist(other.x, other.y, self.x, self.y);
        if (distance < self.size / 2 + other.size / 2) {
            return true;
        }
        return false;
    }

    self.control = function () {

        var a = 97;
        var A = 65;

        var d = 100;
        var D = 68;

        var w = 87;
        var s = 83;

        var space = 32;

        if (keyIsDown(a) || keyIsDown(A) && self.x > 0) {
            self.x -= self.speed;
            self.size = 35;
            self.size2 = 15;
        }
        if (keyIsDown(d) || keyIsDown(D) && self.x < 600) {
            self.x += self.speed;
            self.size = 35;
            self.size2 = 15;
        }

        if (keyIsDown(space)) {
            self.shoot();
        }

    }

    self.shoot = function () {
        if (self.canShoot) {
            self.canShoot = false;
            sprites.push(new Bullet(self.x, self.y, createVector(0, -7), playerTeam));
            setTimeout(function () {
                self.canShoot = true;
            }, self.delay);
        }
    }

    self.display = function () {
        fill(175, 175, 175);
        strokeWeight(self.armor);
        stroke(175, 175, 175);
        ellipse(self.x, self.y, self.size, self.size2)
    }
}
