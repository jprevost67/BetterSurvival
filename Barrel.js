var BarrelFunction = function(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.id = 228;
    this.fillId = 229;
    this.filledPercent = 0;
    this.state = "empty";
    this.isRaining = false;
    this.isDestroyed = false;
    this.place = function(){
        if(this.isDestroyed == false){
            setTile(this.x,this.y,this.z,this.id);
        }
        if(this.state == "empty")
    };
    this.getIsRaining = function(){
        
    };
    this.run = function(){
        
    }
};
