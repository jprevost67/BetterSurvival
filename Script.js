var Items = {
    Crushed: {
        Coal: 450,
        Iron: 451,
        Tin: 452,
        Gold: 453,
    },
    Knives: {
        Wood: 454,
        Stone: 455,
        Iron: 456,
        Gold: 457,
        Diamond: 458,
    },
    Hammers: {
        Wood: 459,
        Stone: 460,
        Iron: 461,
        Gold: 462,
        Diamond: 463,
    },
    Gears: {
        Wood: 464,
        Stone: 465,
        Iron: 466,
    },
    Wrenches: {
        Normal: 467,
    },
    Buckets: {
        Concrete: 468,
    },
    Ingots: {
        Tin: 469
    },
    Nuggets: {
        Iron: 470,
        Tin: 471
    },
    Misc: {
        Rock: 472,
        Silk_Strand: 473,
    },
};
var Blocks = {
    Logs: {
        Apple: 210,
        Orange: 211,
    },
    Leaves: {
        Apple: 212,
        Orange: 213,
    },
    Saplings: {
        Apple: 214,
        Orange: 215,
    },
    Planks: {
        Apple: 216,
        Orange: 217,
    },
    Slabs: {
        Apple: 218,
        Orange: 219,
    },
    Cobble_Compressed: {
        Single: 220,
        Double: 221,
        Triple: 222,
        Quadruple: 223,
    },
    Concrete: {
        Wet: 224,
        Dry: 225,
    },
    Ores: {
        Tin: 226,
    },
    Machinery: {
        Gearbox: 227,
    },
    Barrels: {
        Normal: 228,
        Fill: 229,
    },
};

var createBlock = function(id,name,texture,source,isOpaque,render,destroy,explosion,light,addCreative,extraData) {
    Block.defineBlock(id,name,texture,source,isOpaque,render);
    Block.setDestroyTime(id,destroy);
    Block.setExplosionResistance(id,explosion);
    Block.setLightLevel(id,light);
    Block.setLightOpacity(id,0);
    if(addCreative == true){
        if(extraData >= 0){
            Player.addItemCreativeInv(id,1,0);
        }
        if(extraData >= 1){
            Player.addItemCreativeInv(id,1,1);
        }
        if(extraData >= 2){
            Player.addItemCreativeInv(id,1,2);
        }
        if(extraData >= 3){
            Player.addItemCreativeInv(id,1,3);
        }
        if(extraData >= 4){
            Player.addItemCreativeInv(id,1,4);
        }
        if(extraData >= 5){
            Player.addItemCreativeInv(id,1,5);
        }
        if(extraData >= 6){
            Player.addItemCreativeInv(id,1,6);
        }
        if(extraData >= 7){
            Player.addItemCreativeInv(id,1,7);
        }
        if(extraData >= 8){
            Player.addItemCreativeInv(id,1,8);
        }
        if(extraData >= 9){
            Player.addItemCreativeInv(id,1,9);
        }
        if(extraData >= 10){
            Player.addItemCreativeInv(id,1,10);
        }
        if(extraData >= 11){
            Player.addItemCreativeInv(id,1,11);
        }
        if(extraData >= 12){
            Player.addItemCreativeInv(id,1,12);
        }
        if(extraData >= 13){
            Player.addItemCreativeInv(id,1,13);
        }
        if(extraData >= 14){
            Player.addItemCreativeInv(id,1,14);
        }
        if(extraData >= 15){
            Player.addItemCreativeInv(id,1,15);
        }
    }
};

var createItem = function(id,name,texture,source,stackSize,isTool,addCreative) {
    ModPE.setItem(id,texture,source,name,stackSize);
    Item.setHandEquipped(id,isTool);
    if(addCreative == true){
        Player.addItemCreativeInv(id,1,0);
    }
};

var createTree = function(x,y,z,logId,leavesId){
    this.x = x;
    this.y = y;
    this.z = z;
    this.lg = logId;
    this.ls = leavesId;
    this.timer = 10000;
    this.genTree = function(){
        setTile(this.x,this.y,this.z,this.lg);
        setTile(this.x,this.y+1,this.z,this.lg);
        setTile(this.x,this.y+2,this.z,this.lg);
        setTile(this.x,this.y+3,this.z,this.lg);
        setTile(this.x+1,this.y+3,this.z,this.ls);
        setTile(this.x-1,this.y+3,this.z,this.ls);
        setTile(this.x,this.y+3,this.z+1,this.ls);
        setTile(this.x,this.y+3,this.z-1,this.ls);
        setTile(this.x+1,this.y+3,this.z+1,this.ls);
        setTile(this.x+1,this.y+3,this.z-1,this.ls);
        setTile(this.x-1,this.y+3,this.z+1,this.ls);
        setTile(this.x-1,this.y+3,this.z-1,this.ls);
        setTile(this.x+2,this.y+3,this.z,this.ls);
        setTile(this.x-2,this.y+3,this.z,this.ls);
        setTile(this.x,this.y+3,this.z+2,this.ls);
        setTile(this.x,this.y+3,this.z-2,this.ls);
        
        setTile(this.x+2,this.y+3,this.z+1,this.ls);
        setTile(this.x-2,this.y+3,this.z+1,this.ls);
        setTile(this.x+2,this.y+3,this.z-1,this.ls);
        setTile(this.x-2,this.y+3,this.z-1,this.ls);
        setTile(this.x+2,this.y+3,this.z+2,this.ls);
        setTile(this.x-2,this.y+3,this.z+2,this.ls);
        setTile(this.x+2,this.y+3,this.z-2,this.ls);
        setTile(this.x-2,this.y+3,this.z-2,this.ls);
        
        setTile(this.x+1,this.y+3,this.z+2,this.ls);
        setTile(this.x+1,this.y+3,this.z-2,this.ls);
        setTile(this.x-1,this.y+3,this.z+2,this.ls);
        setTile(this.x-1,this.y+3,this.z-2,this.ls);
        
        setTile(this.x,this.y+4,this.z,this.lg);
        setTile(this.x+1,this.y+4,this.z,this.ls);
        setTile(this.x-1,this.y+4,this.z,this.ls);
        setTile(this.x,this.y+4,this.z+1,this.ls);
        setTile(this.x,this.y+4,this.z-1,this.ls);
        setTile(this.x+1,this.y+4,this.z+1,this.ls);
        setTile(this.x+1,this.y+4,this.z-1,this.ls);
        setTile(this.x-1,this.y+4,this.z+1,this.ls);
        setTile(this.x-1,this.y+4,this.z-1,this.ls);
        setTile(this.x+2,this.y+4,this.z,this.ls);
        setTile(this.x-2,this.y+4,this.z,this.ls);
        setTile(this.x,this.y+4,this.z+2,this.ls);
        setTile(this.x,this.y+4,this.z-2,this.ls);
        
        setTile(this.x,this.y+5,this.z,this.ls);
        setTile(this.x+1,this.y+5,this.z,this.ls);
        setTile(this.x-2,this.y+5,this.z,this.ls);
        setTile(this.x,this.y+5,this.z+1,this.ls);
        setTile(this.x,this.y+5,this.z-1,this.ls);
    };
    this.run = function(){
        this.timer--;
        if(this.timer == 0){
            this.genTree();
        }
    };
};

var Random = function(numbersCanChoseFrom){
    var r = Math.floor(Math.random()*numbersCanChoseFrom);
    return r;
};

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

var registerItems = function(){
    var crushedCoal = new createItem(Items.Crushed.Coal,"Crushed Coal","crushed_coal",0,64,false,true);
    var crushedIron = new createItem(Items.Crushed.Iron,"Crushed Iron","crushed_iron",0,64,false,true);
    var crushedTin = new createItem(Items.Crushed.Tin,"Crushed Tin","crushed_tin",0,64,false,true);
    var crushedGold = new createItem(Items.Crushed.Gold,"Crushed Gold","crushed_gold",0,64,false,true);
    
    var knifeWood = new createItem(Items.Knives.Wood,"Wooden Knife","knife_wood",0,1,true,true);
    var knifeStone = new createItem(Items.Knives.Stone,"Stone Knife","knife_stone",0,1,true,true);
    var knifeIron = new createItem(Items.Knives.Iron,"Iron Knife","knife_iron",0,1,true,true);
    var knifeGold = new createItem(Items.Knives.Gold,"Gold Knife","knife_gold",0,1,true,true);
    var knifeDiamond = new createItem(Items.Knives.Diamond,"Diamond Knife","knife_diamond",0,1,true,true);
    
    var hammerWood = new createItem(Items.Hammers.Wood,"Wooden Hammer","hammer_wood",0,1,true,true);
    var hammerStone = new createItem(Items.Hammers.Stone,"Stone Hammer","hammer_stone",0,1,true,true);
    var hammerIron = new createItem(Items.Hammers.Iron,"Iron Hammer","hammer_iron",0,1,true,true);
    var hammerGold = new createItem(Items.Hammers.Gold,"Gold Hammer","hammer_gold",0,1,true,true);
    var hammerDiamond = new createItem(Items.Hammers.Diamond,"Diamond Hammer","hammer_diamond",0,1,true,true);
    
    var gearWood = new createItem(Items.Gears.Wood,"Wooden Gear","gear_wood",0,64,true,true);
    var gearStone = new createItem(Items.Gears.Stone,"Stone Gear","gear_stone",0,64,true,true);
    var gearIron = new createItem(Items.Gears.Iron,"Iron Gear","gear_iron",0,64,true,true);
    
    var wrench = new createItem(Items.Wrenches.Normal,"Wrench","wrench",0,1,true,true);
    
    var concreteBucket = new createItem(Items.Buckets.Concrete,"Concrete Bucket","bucket_Concrete",0,1,false,true);
    
    var ingotTin = new createItem(Items.Ingots.Tin,"Tin Ingot","ingot_tin",0,64,false,true);
    
    var nuggetIron = new createItem(Items.Nuggets.Iron,"Iron Nugget","nugget_iron",0,64,false,true);
    var nuggetTin = new createItem(Items.Nuggets.Tin,"Tin Nugget","nugget_tin",0,64,false,true);
    
    var rock = new createItem(Items.Misc.Rock,"Rock","rock",0,64,false,true);
    
    var silkStrand = new createItem(Items.Misc.Silk_Strand,"Silk Strand","silk_strand",0,64,false,true);
};

var registerBlocks = function() {
    var appleLog = new createBlock(Blocks.Logs.Apple,"Apple Tree Log",[["log_apple",4],["log_apple",4],["log_apple",1],["log_apple",1],["log_apple",1],["log_apple",1]],5,0,0,0.5,1,0,true,0);
    var orangeLog = new createBlock(Blocks.Logs.Orange,"Orange Tree Log",[["log_orange",4],["log_orange",4],["log_orange",1],["log_orange",1],["log_orange",1],["log_orange",1]],5,0,0,0.5,1,0,true,0);
    
    var appleLeaves = new createBlock(Blocks.Leaves.Apple,"Apple Tree Leaves",[["leaves_apple",0]],1,0,0,0.1,0.5,0,true,0);
    var orangeLeaves = new createBlock(Blocks.Leaves.Orange,"Orange Tree Leaves",[["leaves_orange",0]],1,0,0,0.1,0.5,0,true,0);
    
    var appleSapling = new createBlock(Blocks.Saplings.Apple,"Apple Tree Sapling",[["leaves_apple",0]],1,0,0,0.1,0.5,0,false,0);
    Block.setShape(Blocks.Saplings.Apple,4/16,0,4/16,12/16,6/16,12/16);
    var orangeSapling = new createBlock(Blocks.Saplings.Orange,"Orange Tree Sapling",[["leaves_orange",0]],1,0,0,0.1,0.5,0,false,0);
    Block.setShape(Blocks.Saplings.Orange,4/16,0,4/16,12/16,6/16,12/16);
    
    var applePlanks = new createBlock(Blocks.Planks.Apple,"Apple Tree Planks",[["planks_apple",0]],5,0,0,0.5,1,0,true,0);
    var orangePlanks = new createBlock(Blocks.Planks.Orange,"Orange Tree Planks",[["planks_orange",0]],5,0,0,0.5,1,0,true,0);
    
    var appleSlabs = new createBlock(Blocks.Slabs.Apple,"Apple Tree Slabs",[["planks_apple",0]],5,0,0,0.5,1,0,true,0);
    Block.setshape(Blocks.Slabs.Apple,0,0,0,1,0.5,1,0);
    Block.setshape(Blocks.Slabs.Apple,0,0.5,0,1,1,1,1);
    Block.setshape(Blocks.Slabs.Apple,0,0,0,1,1,1,2);
    var orangeSlabs = new createBlock(Blocks.Slabs.Orange,"Orange Tree Slabs",[["planks_orange",0]],5,0,0,0.5,1,0,true,0);
    Block.setshape(Blocks.Slabs.Orange,0,0,0,1,0.5,1,0);
    Block.setshape(Blocks.Slabs.Orange,0,0.5,0,1,1,1,1);
    Block.setshape(Blocks.Slabs.Orange,0,0,0,1,1,1,2);
    
    var cobbleCompressedSingle = new createBlock(Blocks.Cobble_Compressed.Single,"Single Compressed Cobblestone",[["cobble_compressed_single",0]],2,0,0,1,1,0,true,0);
    var cobbleCompressedDouble = new createBlock(Blocks.Cobble_Compressed.Double,"Double Compressed Cobblestone",[["cobble_compressed_double",0]],2,0,0,1,1,0,true,0);
    var cobbleCompressedTriple = new createBlock(Blocks.Cobble_Compressed.Triple,"Triple Compressed Cobblestone",[["cobble_compressed_triple",0]],2,0,0,1,1,0,true,0);
    var cobbleCompressedQuadruple = new createBlock(Blocks.Cobble_Compressed.Quadruple,"Quadruple Compressed Cobblestone",[["cobble_compressed_quadruple",0]],2,0,0,1,1,0,true,0);
    
    var concreteWet = new createBlock(Blocks.Concrete.Wet,"Concrete (Liquid)",[["concrete",0]],1,0,0,9999,9999,0,false,0);
    var concreteDry = new createBlock(Blocks.Concrete.Dry,"Concrte",[["concrete",0]],1,0,0,1.5,2,0,true,0);
    
    var tinOre = new createBlock(Blocks.Ore.Tin,"Tin Ore",[["ore_tin",0]],1,0,0,1.5,2,0,true,0);
    
    var gearbox = new createBlock(Blocks.Machinery.Gearbox,"Gearbox",[["gearbox",0]],5,0,0,1,1,0,true,0);
    
    var woodBarrel = new createBlock(Blocks.Barrels.Normal,"Wooden Barrel",[["barrel",2],["barrel",1],["barrel",0],["barrel",0],["barrel",0],["barrel",0]],5,0,0,1,1,0,true,0);
    var barrelFill = new createBlock(Blocks.Barrels.Fill,"Barrel Fill",[["still_water",0]],5,0,0,1,1,0,false,0);
};

registerItems();
registerBlocks();

