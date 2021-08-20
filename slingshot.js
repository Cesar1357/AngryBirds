class slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    

    display(){
        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(60,28,10);
            if(pointA.x < 220){
                strokeWeight(7);
            
                line(pointA.x-25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x-25,pointA.y,pointB.x+50,pointB.y-3);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+50,pointB.y-3);
                image(this.sling3,pointA.x+20,pointA.y-10,15,30);   
            }
            pop();

        }
        image(this.sling1,200,20);
        image(this.sling2,170,20);
    }
}

//<>