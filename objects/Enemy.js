function Enemy(startingX, startingY, team) {

    var self = this;
    self.x = startingX;
    self.y = startingY;
    self.size = 25;
    self.speed = 8;
    self.team = team;

    self.control = function () {
        self.y += self.speed;
        if (self.y > height) {
            self.y = -self.size;
            self.x = random(0, width);
        }

    }

    self.display = function () {
        fill(0, 0, 0);
        ellipse(self.x, self.y, self.size - 15, self.size);
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
        if (index !== -1) {
            sprites.splice(index, 1);
            score = score + 1;
        }
        console.log('collision');
    }
}
