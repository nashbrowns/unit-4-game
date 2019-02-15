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

var HollowKnight = { 
    
       SRC: "assets/images/Hollow_Knight.png",
    
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

var Megaman = {
    
       SRC: "assets/images/Megaman.png",
		
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

//Global Variable Definitions
var PC = "assets/images/blank.jpg";
var NPC = "assets/images/blank.jpg";

var PC_Chosen = false;

var FightStart = false;

var ChseBtn = "";

//Functions
function updatePC(ImgPath){
  $("#PC").attr("src", PC.SRC);
  $(ChseBtn).html('<p><input type="button" value="Choose Character" onclick="PC_Choice()" />');
}

function updateNPC(ImgPath){
  if(NPC != PC){
    $("#NPC").attr("src", NPC.SRC).addClass('Img-Mirror');
    $(ChseBtn).html('<p><input type="button" value="Choose Opponent" onclick="NPC_Choice()" />');
  }
}

function PC_Choice(){
  PC_Chosen = true;
  alert('PC Chosen');
  $(ChseBtn).html("");
}

function NPC_Choice(){
  alert('NPC Chosen');
  $(ChseBtn).html("");
  FightStart = true;
}



// Start Code Execution
$(document).ready(function() {

    $( "#Shovel_Knight" ).click(function() {
      if(!FightStart){
        $(ChseBtn).html("");
        ChseBtn = "#Char1";
          if(!PC_Chosen){
            PC = ShovelKnight;
            updatePC(PC);
          }
          else{
            NPC = ShovelKnight;
            updateNPC(NPC); 
          }
        }
    });

    $( "#Black_Mage" ).click(function() {
        if(!FightStart){
          $(ChseBtn).html("");
          ChseBtn = "#Char2";
          if(!PC_Chosen){
            PC = BlackMage;
            updatePC(PC);
          }
          else{
            NPC = BlackMage;
            updateNPC(NPC); 
          }
        }
    });

    $( "#Hollow_Knight" ).click(function() {
        if(!FightStart){
          $(ChseBtn).html("");
          ChseBtn = "#Char3";
          if(!PC_Chosen){
            PC = HollowKnight;
            updatePC(PC);
          }
          else{
            NPC = HollowKnight;
            updateNPC(NPC); 
          }
        }
    });

    $( "#Megaman" ).click(function() {
      if(!FightStart){
        $(ChseBtn).html("");
        ChseBtn = "#Char4";
        if(!PC_Chosen){
          PC = Megaman;
          updatePC(PC);
        }
        else{
          NPC = Megaman;
          updateNPC(NPC); 
        }
      }
    });

    $( "#PC" ).click(function() {
      if(FightStart){
        console.log(PC.HP);
        $("#PC_HP").html('<h3 style="background-color:green;">'+PC.HP+'</h3>');
      }
    });

});

