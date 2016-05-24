var BarrelFunction = function(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.id = 228;
    this.fillId = 229;
    this.filledPercent = 0;
    this.state = "empty";
    this.isRaining = false;
    this.isDestroyed = false;
    this.place = function() {
        if(this.isDestroyed == false) {
            setTile(this.x,this.y,this.z,this.id);
            if(this.state == "water") {
                setTile(x,y+1,z,this.fillId,0);
                Block.setShape(229,2.5/16,0.125/16,2.5/16,13.5/16,this.filledPercent/100,13.5/16);
            }
        }
    };
    this.getIsRaining = function() {
        if(Level.getRainLevel() > 0) {
            this.isRaining = true;
        }
        else {
            this.isRaining = false;
        }
    };
    this.fillBarrel = function(placeWater) {
        if(this.isRaining == true){
            if(this.state == "empty" || this.state == "water"){
                this.state = "water";
                if(this.filledPercent < 100){
                    this.filledPercent++;
                }
            }
        }
        if(placeWater == true){
            if(this.state == "empty" || this.state == "water"){
                this.state = "water";
                this.filledPercent = 100;
            }
        }
    };
    this.emptyBarrel = function(){
        this.state = "empty";
        this.filledPercent = 0;
        setTile(x,y+1,z,0);
    }
    this.useOn = function(x,y,z,i,b,s,id,bd) {
        
    };
    this.destroy = function() {
        this.isDestroyed = true;
    };
    this.run = function() {
        this.place();
        this.getIsRaining();
    }
};
