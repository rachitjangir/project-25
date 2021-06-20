class paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2}
        this.image=loadImage("paper.png")
        this.x=x;
        this.y=y;

        friction keyPressed(){
            if(keyCode === up_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
            }
        }
    }
    
}