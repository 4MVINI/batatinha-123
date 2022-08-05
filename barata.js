class Barata {
    constructor(x,y) {

      this.body = Bodies.rectangle(x, y, 50,50);
      this.image = loadImage("img/barata.png")

  
      World.add(world, this.body);
    }
    
    remove(index) {
      this.animation = brokenBoatAnimation;
      this.speed = 0.05;
      this.width = 300;
      this.height = 300;
      this.isBroken = true;
      setTimeout(() => {
        Matter.World.remove(world, boats[index].body);
        boats.splice(index, 1);
      }, 2000);
    }
  
    display() {
     
      var pos = this.body.position;
      
      
  
      push();
      translate(pos.x, pos.y);
      
      imageMode(CENTER);


      image(this.image, pos.x, pos.y, 50,50);


      pop();
    }
  }