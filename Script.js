var Items = {
    Crushed: {
        Coal: 450,
        Iron: 451,
        Gold: 452,
    },
    Knives: {
        Wood: 453,
        Stone: 454,
        Iron: 455,
        Gold: 456,
        Diamond: 457,
    },
    Hammers: {
        Wood: 458,
        Stone: 459,
        Iron: 460,
        Gold: 461,
        Diamond: 462,
    },
    Gears: {
        Wood: 463,
        Stone: 464,
        Iron: 465,
    },
    Wrenches: {
        Normal: 466,
    },
    Buckets: {
        Concrete: 467,
    },
    Ingots: {
        Tin: 468
    },
    Nuggets: {
        Iron: 469,
        Tin: 470
    },
    Misc: {
        Rock: 471,
        Silk_Strand: 472,
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

var registerItems = function(){
    var crushedCoal = new createItem(Items.Crushed.Coal,"Crushed Coal","crushed_coal",0,64,false,true);
    var crushedIron = new createItem(Items.Crushed.Iron,"Crushed Iron","crushed_iron",0,64,false,true);
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
