class Box   {
  constructor(x, y, width, height){
    var options = {
    isStatic: true
      // restitution:0.8,
      //friction:1.0,
      //density:1.0
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
}
display(){
  //var angle = this.body.angle;
  var pos = this.body.position
    push();
  translate(pos.x, pos.y);
  rectMode(CENTER);
 // rotate(angle);
   fill("White")
  rect(x, y, this.width, this.height);
   pop();
}
}