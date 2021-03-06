class Square {
    constructor(x, y, width, height, color){
        var options = {
            isStatic: false,
            restitution: 0.2
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        this.color = color;

        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER)
        if (this.body.speed < 3){
            push();
            fill(this.color)
            rect(pos.x, pos.y, this.width, this.height)
            pop();
        }else{
            World.remove(world, this.body)
        }
        
    }
}