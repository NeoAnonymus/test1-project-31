class Drops{
    constructor(x, y,radius) {
        var options = {
            'friction':0.1
        }
        this.rain = Bodies.circle(x, y, radius, options);
        this.radius = this.radius;
        this.x = random;
        this.y = random;
       
        
        World.add(world, this.rain);
      }
      display(){
          if(this.rain.y>700){
              Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0.400)})
          }
        var MaxDrops = 100;
        for(var i = 0;i<MaxDrops;i++){
            this.rain.push(new Drops(0,400),random(0,400));
           }
      }
}