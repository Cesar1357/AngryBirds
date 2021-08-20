class Bird extends baseClass{
    constructor(x, y) {
      super(x,y,50,50);
      
      this.image = loadImage("bird.png");
      this.smokeImage = loadImage("smoke.png");
      this.trajectory = [];
      
    }
    display(){
      //pos.x = mouseX;
      //pos.y = mouseY;

      super.display();     
      var pos = this.body.position;

      if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [pos.x,pos.y];
      this.trajectory.push(position);
      }

      for(var i = 0; i < this.trajectory.length; i++){
        image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
      }

    }
  };

  //< >
  