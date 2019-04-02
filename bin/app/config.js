require.config({

  paths: {
  /*
    "PIXI": "../../../framework/pixi_v_3_0_8",
    "jQuery": "../../../framework/jquery",
	"Tween":"../../../framework/TweenMax",
	"Howler":"../../../framework/howler",
	"HandleCookie":"../../../framework/handlecookie",
	
	"Stage": "../../../framework/stage",
	"FluidElement": "../../../framework/fluidElement",
	"LoadBar":"../../../framework/loadbar",
	"Trig":"../../../framework/trig",
	"HandleXML":"../../../framework/handlexml",
	"AssetHandler":"../../../framework/assethandler",
	"ButtonHelper":"../../../framework/buttonHelper",
	"KeyboardHelper":"../../../framework/keyboardHelper",

	"TitleScreen":"titlescreen",
	"Pelm":"pelm",
	"Duck":"duck",
	"Log":"log",
	"Star":"star",
	"Bubble":"bubble"*/

	"PIXI": "../lib/pixi_v_4_3_2",
	"jQuery": "../lib/jquery_3_3_1",
	
  },
	shim: {
	/*
    "Tween": {
      exports: "TweenMax"
    }
	*/
  },
  
  waitSeconds:0
});


/*
define(["main","jQuery"],
	function (Game,jQuery){
    window.game = new Game();
});*/


define(["main",'jQuery'],
	function (Game, jQuery){
		window.game = new Game();
	}
);

