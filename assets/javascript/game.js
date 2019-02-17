//Object Definitions
var ShovelKnight = {
        Name: 'Shovel Knight',
         Id : '#Shovel',
         SRC: "assets/images/Shovel_Knight.png",
     Base_HP: 100, // Stores base Hit Points
          HP: 100,  // Stores Hit Points or “health”

    BaseAtk : 9,	// Stores base Attack value
        Atk : 9, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
     AtkInc : 9,	//Stores Attack value increase after each hit when played by user

     CtrAtk : 50, 	//Stores Counter Attack value

    ResStat : function() {
      this.HP = 100;
      this.BaseAtk = 9;
      this.Atk = 9;
      this.CtrAtk = 50;
    }

};

var BlackMage = { 
       Name: 'Black Mage',
         Id: '#Mage',
        SRC: "assets/images/Black_Mage.png",
    Base_HP: 200, // Stores base Hit Points
         HP: 200,  // Stores Hit Points or “health”

    BaseAtk : 8,	// Stores base Attack value
      Atk : 8, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
    AtkInc : 8,	//Stores Attack value increase after each hit when played by user

    CtrAtk : 15, 	//Stores Counter Attack value

    ResStat : function() {
    this.HP = 200;
    this.BaseAtk = 8;
    this.Atk = 8;
    this.CtrAtk = 15;
    }

};

var HollowKnight = {
      Name: 'Hollow Knight', 
        Id: '#Hollow',
       SRC: "assets/images/Hollow_Knight.png",
   Base_HP: 250, // Stores base Hit Points
        HP: 250,  // Stores Hit Points, always Base_HP intially

    BaseAtk : 6,	// Stores base Attack value
      Atk : 6, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
    AtkInc : 6,	//Stores Attack value increase after each hit when played by user

    CtrAtk : 8, 	//Stores Counter Attack value

    ResStat : function() {
    this.HP = 250;
    this.BaseAtk = 6;
    this.Atk = 6;
    this.CtrAtk = 8;
    }

};

var Megaman = {
      Name: 'Megaman',
        Id: '#Mega',
       SRC: "assets/images/Megaman.png",
   Base_HP: 300, // Stores base Hit Points
        HP: 300,  // Stores Hit Points or “health”

    BaseAtk : 6,	// Stores base Attack value
      Atk : 6, 	//Stores Attack power incremented by AtkInc, initialized as BaseAtk
    AtkInc : 6,	//Stores Attack value increase after each hit when played by user

    CtrAtk : 7, 	//Stores Counter Attack value

    ResStat : function() {
    this.HP = 300;
    this.BaseAtk = 6;
    this.Atk = 6;
    this.CtrAtk = 7;
    }

};

var Blank_Char = {
 SRC: "assets/images/blank.jpg",
Base_HP: 10, // Stores base Hit Points
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
  $("#Instructions").html("Click a Sprite to Select Opponent!");
}

function NPC_Choice(){
  $(ChseBtn).html("");
  FightStart = true;
  $(NPC.Id).css('background-color','yellow');
  Stat_Update(PC,NPC);
  $("#Instructions").html("Click your character in the ring fight!");
  
}

function Stat_Update(PC_HP,NPC_HP){
  var PC_Width;
  var NPC_Width;
  var PC_Str;
  var NPC_Str;

  $("#PC_HP").addClass('HP-Bar');
  $("#NPC_HP").addClass('HP-Bar');

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

function NewNPC(){
  FightStart = false;
  NPC.HP = 0;
  Stat_Update(PC,NPC);
  $(NPC.Id).css('background-color','red');
  Defeated.push(NPC.Id);
  NPC = Blank_Char;
  updateNPC(NPC);
  $(ChseBtn).html("");
  $("#Instructions").html("Choose Another Opponent!");

  console.log("opponents defeated = "+Defeated.length);
  if(Defeated.length == 3)
  {
    $("#Instructions").html("You Win!");
    ResetGame();
  }
  
}

function ResetGame(){

  PC = Blank_Char;
  NPC = Blank_Char;

  $("#PC").attr("src", PC.SRC);
  $("#NPC").attr("src", NPC.SRC);

  $("#CharStats_PC").html('test');

  $("#CharStats_NPC").html('test');

  ShovelKnight.ResStat();
  BlackMage.ResStat();
  HollowKnight.ResStat();
  Megaman.ResStat();

  $(ShovelKnight.Id).css('background-color','white');
  $(BlackMage.Id).css('background-color','white');
  $(HollowKnight.Id).css('background-color','white');
  $(Megaman.Id).css('background-color','white');

  $(ChseBtn).html("");

  Stat_Update(PC,NPC);
  FightStart = false;
  PC_Chosen = false;
  Defeated = [];

}

function Attack(){

  NPC.HP = NPC.HP-PC.Atk;
  PC.Atk = PC.Atk+PC.BaseAtk;

  if(NPC.HP <= 0){
    
    NewNPC();

  }
  else{
  PC.HP = PC.HP-NPC.CtrAtk;
  }

  if( (PC.HP <= 0) && (NPC.HP!=0)){
    PC.HP = 0;
    $("#Instructions").html("You Lose!");
    ResetGame();
  }
}

// Start Code Execution
$(document).ready(function() {

    $("#Instructions").html("Click a Sprite to Select Fighter!");
    Stat_Update(PC,NPC);

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

