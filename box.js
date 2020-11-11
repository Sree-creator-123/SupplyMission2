class Box {
    constructor(x, y, widthBox, heightBox) {

        var boxOptions = {
            isStatic: true
        }
        
        this.width = widthBox;
        this.height = heightBox;
        this.object = Bodies.rectangle(this.x, this.y, this.width, this.height, boxOptions);
        World.add(world, object);

    }

    display() {

        var pos = this.object.position;
        var angle = this.object.angle;

        push();
        translate(pos.x,pos.y)
        rotate(angle);
        fill(255)
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();

    }
}