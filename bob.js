class bob {

    constructor(x,y,r){


      var options={

          isStatic: false,
          restitution:1,
          density:1.2,
          friction:0.5
      }
    
	  this.body=Bodies.circle(x,y,25,options)
	  this.r=25

      World.add(world,this.body)
    }
    display (){
      var pos=this.body.position

	  fill(255,0,255)
	  ellipseMode(RADIUS);
	  ellipse(pos.x,pos.y,this.r, this.r);
      }
    }
