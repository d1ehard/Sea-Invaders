function Bullet(startingX, startingY, vector, team) {

    var self = this;
    self.x = startingX;
    self.y = startingY;
    self.size = 5;
    self.speed = 5;
    self.team = team;
    self.vector = vector;

    self.control = function () {
       self.x += self.vector.x;
       self.y += self.vector.y;
        
        if(self.y < 0 || self.y > height || self.x < 0 || self.x > width){
            var index = sprites.indexOf(self);
            if(index !== -1) {
                sprites.splice(index, 1);
            }
        }
    }

    self.display = function () {
        fill(255, 0, 0);    
        ellipse(self.x, self.y, self.size, self.size);
    }

    self.isColliding = function (other) {
        var distance = dist(other.x, other.y, self.x, self.y);
        if (distance < self.size / 2 + other.size / 2) {
            return true;
            score = score + 1;
        }
        return false;
    }

    self.handleCollision = function () {
        var index = sprites.indexOf(self);
        if (index !== -1) {
            sprites.splice(index, 1);
        }
    }
}
