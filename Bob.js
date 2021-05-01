class Bob{
    constructor(x,y,width,height,angle)
    {
        var options={
            density: 0.58,
            restitution: 1.7
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(3);
        stroke("white");
        fill("black");
        ellipse(0,0,this.width,this.height);
        pop();
    }
}