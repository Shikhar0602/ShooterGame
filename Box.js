class Box extends BaseClass {
  constructor(x, y, width, height, r, g, b){
    super(x,y,width,height);
    this.r = r;
    this.g = g;
    this.b = b;
  }
   display() {
    fill(this.r,this.g,this.b);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
   }

};
