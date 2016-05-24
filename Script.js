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
    Nuggets: {
        Iron: 468,
    },
    Misc: {
        Rock: 469,
        Silk_Strand: 470,
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

var createBlock = function(id,name,texture,source,stackSize,isTool,addCreative) {
    ModPE.setItem(id,texture,source,name,stackSize);
    Item.setHandEquipped(id,isTool);
    if(addCreative == true){
        Player.addItemCreativeInv(id,1,0);
    }
};
