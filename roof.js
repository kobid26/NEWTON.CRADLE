class roof
{
    constructor(x,y,width,height)
    {

        var options=
        {
            isStatic:true
		}
		this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
       
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        
    }

    display()
    {

		var pos=this.body.position;		
		rectMode(CENTER)
		strokeWeight(4);
		fill(255,255,0)
		rect(pos.x,pos.y,this.width, this.height);
     
    }
  }