//Object Definitions
var ShovelKnight = {
    
         SRC: "assets/images/Shovel_Knight.png",
		
          HP: 100,  // Stores Hit Points or “health”

    BaseAtk : 6,	// Stores base Attack value
        Atk : this.BaseAtk, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
     AtkInc : 6,	//Stores Attack value increase after each hit when played by user

     CtrAtk : 12, 	//Stores Counter Attack value

    AtkName : function(EnemyHp, Stats) {
        this.HP = 1;
      //Have individual attacks per character that changes enemy hp based on certain stats, like crit chances, etc.. (get base attacks down first)
    },

    ResStat : function() {
      this.HP = 6;
      this.BaseAtk = 6;
      this.Atk = 6;
      this.CtrAtk = 6;
    }

};

var BlackMage = { 
    
        SRC: "assets/images/Black_Mage.png",
    
        HP: 200,  // Stores Hit Points or “health”

    BaseAtk : 6,	// Stores base Attack value
      Atk : this.BaseAtk, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
    AtkInc : 6,	//Stores Attack value increase after each hit when played by user

    CtrAtk : 12, 	//Stores Counter Attack value

    AtkName : function(EnemyHp, Stats) {
      this.HP = 1;
    //Have individual attacks per character that changes enemy hp based on certain stats, like crit chances, etc.. (get base attacks down first)
    },

    ResStat : function() {
    this.HP = 6;
    this.BaseAtk = 6;
    this.Atk = 6;
    this.CtrAtk = 6;
    }

};

var HollowKnight = { 
    
       SRC: "assets/images/Hollow_Knight.png",
    
        HP: 300,  // Stores Hit Points or “health”

    BaseAtk : 6,	// Stores base Attack value
      Atk : this.BaseAtk, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
    AtkInc : 6,	//Stores Attack value increase after each hit when played by user

    CtrAtk : 12, 	//Stores Counter Attack value

    AtkName : function(EnemyHp, Stats) {
      this.HP = 1;
    //Have individual attacks per character that changes enemy hp based on certain stats, like crit chances, etc.. (get base attacks down first)
    },

    ResStat : function() {
    this.HP = 6;
    this.BaseAtk = 6;
    this.Atk = 6;
    this.CtrAtk = 6;
    }

};

var Megaman = {
    
       SRC: "assets/images/Megaman.png",
		
        HP: 400,  // Stores Hit Points or “health”

    BaseAtk : 6,	// Stores base Attack value
      Atk : this.BaseAtk, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
    AtkInc : 6,	//Stores Attack value increase after each hit when played by user

    CtrAtk : 12, 	//Stores Counter Attack value

    AtkName : function(EnemyHp, Stats) {
      this.HP = 1;
    //Have individual attacks per character that changes enemy hp based on certain stats, like crit chances, etc.. (get base attacks down first)
    },

    ResStat : function() {
    this.HP = 6;
    this.BaseAtk = 6;
    this.Atk = 6;
    this.CtrAtk = 6;
    }

};

//Global Variable Definitions

//Functions

// Start Code Execution
$(document).ready(function() {

$( "#Shovel_Knight" ).click(function() {
    $("#PC_Img")
    .attr("src",ShovelKnight.SRC);
  });

$( "#Black_Mage" ).click(function() {
    $("#PC_Img")
    .attr("src",BlackMage.SRC);
});

$( "#Hollow_Knight" ).click(function() {
    $("#PC_Img")
    .attr("src",HollowKnight.SRC);
});

$( "#Megaman" ).click(function() {
    $("#PC_Img")
    .attr("src",Megaman.SRC);
});

});

