//Object Definitions
var ShovelKnight = {
         Id : '#Shovel',
         SRC: "assets/images/Shovel_Knight.png",
     Base_HP: 100, // Stores base Hit Points
          HP: 100,  // Stores Hit Points or “health”

    BaseAtk : 6,	// Stores base Attack value
        Atk : 6, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
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
         Id: '#Mage',
        SRC: "assets/images/Black_Mage.png",
    Base_HP: 200, // Stores base Hit Points
         HP: 200,  // Stores Hit Points or “health”

    BaseAtk : 6,	// Stores base Attack value
      Atk : 6, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
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
        Id: '#Hollow',
       SRC: "assets/images/Hollow_Knight.png",
   Base_HP: 300, // Stores base Hit Points
        HP: 300,  // Stores Hit Points, always Base_HP intially

    BaseAtk : 6,	// Stores base Attack value
      Atk : 6, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
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
        Id: '#Mega',
       SRC: "assets/images/Megaman.png",
   Base_HP: 400, // Stores base Hit Points
        HP: 400,  // Stores Hit Points or “health”

    BaseAtk : 6,	// Stores base Attack value
      Atk : 6, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
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

var Blank_Char = {
 SRC: "assets/images/blank.jpg",
Base_HP: 0, // Stores base Hit Points
  HP: 0,  // Stores Hit Points or “health”

BaseAtk : 0,	// Stores base Attack value
Atk : 0, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
AtkInc : 0,	//Stores Attack value increase after each hit when played by user

CtrAtk : 0, 	//Stores Counter Attack value

};

//Global Variable Definitions

var PC = Blank_Char;
var NPC = Blank_Char;

var PC_Chosen = false; //indicates when player chooses character

var FightStart = false; //indicates when opponent is chosen, reset when opponent defeated

var ChseBtn = "";

var Defeated = [];

//Functions
function updatePC(ImgPath){
  $("#PC").attr("src", PC.SRC);
  $(ChseBtn).html('<p><input type="button" value="Choose Character" onclick="PC_Choice()" />');
  Stat_Update(PC,NPC);
}

function updateNPC(ImgPath){
  if(NPC != PC){
    $("#NPC").attr("src", NPC.SRC).addClass('Img-Mirror');
    $(ChseBtn).html('<p><input type="button" value="Choose Opponent" onclick="NPC_Choice()" />');
    Stat_Update(PC,NPC);
  }
}

function PC_Choice(){
  PC_Chosen = true;
  $(ChseBtn).html("");
  $(PC.Id).css('background-color','green');
}

function NPC_Choice(){
  $(ChseBtn).html("");
  FightStart = true;
  $(NPC.Id).css('background-color','yellow');
  Stat_Update(PC,NPC);
  
}

function Stat_Update(PC_HP,NPC_HP){
  var PC_Width;
  var NPC_Width;
  var PC_Str;
  var NPC_Str;

  $("#PC_HP").html('<div></div>').addClass('HP-Bar');
  $("#NPC_HP").html('<div></div>').addClass('HP-Bar');

  PC_Width = ((PC_HP.HP)/(PC_HP.Base_HP)*100);
  NPC_Width = ((NPC_HP.HP)/(NPC_HP.Base_HP)*100);

  PC_Str = PC_Width.toString()+'%';
  NPC_Str = NPC_Width.toString()+'%';

  $("#PC_HP").css("width",PC_Str);
  $("#NPC_HP").css("width",NPC_Str);

  $("#CharStats_PC")
    .html('HP = '+PC.HP)
    .append('<p>Atk = '+PC.Atk+'</p>');

  $("#CharStats_NPC")
    .html('HP = '+NPC.HP)
    .append('<p>Atk = '+NPC.CtrAtk+'</p>');
  
}

function Attack(){
  NPC.HP = NPC.HP-PC.Atk;
  PC.Atk = PC.Atk+PC.BaseAtk;
  if(NPC.HP <= 0){
    FightStart = false;
    NPC.HP = 0;
    $(NPC.Id).css('background-color','red');
    Defeated.push(NPC.Id);
    NPC = Blank_Char;
    updateNPC(NPC);
    $(ChseBtn).html("");

  }
  else{
  PC.HP = PC.HP-NPC.CtrAtk;
  }
}

// Start Code Execution
$(document).ready(function() {

    $( "#Shovel_Knight" ).click(function() {
      if( (!FightStart) && (!Defeated.includes('#Shovel') ) ){
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
        if( (!FightStart) && (!Defeated.includes('#Mage') ) ){
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
        if( (!FightStart) && (!Defeated.includes('#Hollow') ) ){
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
      if( (!FightStart) && (!Defeated.includes('#Mega') ) ){
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
        Attack();
        Stat_Update(PC,NPC);
        console.log('PC HP = '+PC.HP);
        console.log('NPC HP = '+NPC.HP);
      }
    });

});

