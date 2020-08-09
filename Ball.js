class Ball {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':false,
          'restitution':0.5,
          'friction':0.3,
          'density':1.2
      }
      this.body =  Bodies.circle(100,100,20,options);
      this.radius=20; 
      
      World.add(world, this.body);
    }
    display(){

      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,20);
      strokeWeight(4);
      stroke("green");
      fill(255);
      pop();
    }
  };
  