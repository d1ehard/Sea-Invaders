function Shooter(startingX, startingY, team) {

    var self = this;
    self.x = startingX;
    self.y = startingY;
    self.size = 25;
    self.speed = 3;
    self.bulletSpeed = 7;
    self.team = team;
    self.delay = 400;
    self.canShoot = true;
    self.delay = 500;
    self.armor = 5;


    self.control = function () {
        self.x = self.x + self.speed;
        
        if(self.x < 0 || self.x > width) {
            self.speed *= -1;
        }
        var vector = self.aim();
        self.shoot(vector.mult(self.bulletSpeed));

    }

    self.display = function () {
        fill(0, 0, 0);
        strokeWeight(self.armor);
        stroke(200, 0, 0);
        ellipse(self.x, self.y, self.size + 20, self.size + 5);
    }

    self.aim = function () {
        var target = player;
        var dx = target.x - self.x;
        var dy = target.y - self.x;
        var vector = createVector(dx, dy);
        vector.normalize();
        return vector;

    }

    self.shoot = function (vector) {
        if (self.canShoot) {
            self.canShoot = false;
            sprites.push(new Bullet(self.x, self.y, vector, enemyTeam));
            setTimeout(function() {
                self.canShoot = true;
            }, self.delay);
        }
    }

    self.isColliding = function (other) {
        var distance = dist(other.x, other.y, self.x, self.y);
        if (distance < self.size / 2 + other.size / 2) {
            return true;
        }
        return false;
    }

    self.handleCollision = function () {
        var index = sprites.indexOf(self);
        if (self.armor > 0) {
            self.armor -= 1;
        } else {
            if (index !== -1) {
                sprites.splice(index, 1);
                score = score + 2;
            }
        }

    }
}
