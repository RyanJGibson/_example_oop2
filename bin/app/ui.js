define([
	'PIXI',
	'event_manager'
	],
	function(
		PIXI,
		EventManager
		) {
  'use strict';

    var UI = {};

    UI.init = function(oMain, cUI){
		console.log('UI.Init');
		
		this.cUI = cUI;

		this.createButtons();
	};


	UI.createButtons = function(){
		this.aButtons = [];
		this.createButton('ADD DOG', 120, 50, 65, 450, 'onAddDog');	
		this.createButton('REMOVE DOG', 180, 50, 220, 450, 'onRemoveDog');	
		this.createButton('ADD CAT', 120, 50, 390, 450, 'onAddCat');	
		this.createButton('REMOVE CAT', 180, 50, 545, 450, 'onRemoveCat');	
	};



	UI.createButton = function(sLabel, nWidth, nHeight, nX, nY, sEventName){
		console.log('UI.createButton');

		var oButton = {};

		oButton.cButton = new PIXI.Container();

		var gra = new PIXI.Graphics();
		gra.beginFill(0x999999);
		gra.drawRect(0,0,nWidth,nHeight);
		oButton.cButton.addChild(gra);

		gra.pivot.x = nWidth/2;
		gra.pivot.y = nHeight/2;

		var txt = new PIXI.Text(sLabel, {fontFamily:"Verdana, Geneva, sans-serif", fontSize:"20px", fill:"#000000", align:'center'});
		oButton.cButton.addChild(txt);
		
		txt.anchor.x = 0.5;
		txt.anchor.y = 0.5;

		this.cUI.addChild(oButton.cButton);
		oButton.cButton.x = nX;
		oButton.cButton.y = nY;

		oButton.cButton.interactive = true;
		oButton.cButton.buttonMode = true;


		


		oButton.cButton.mousedown = oButton.cButton.touchstart = function(md){
			//fFunc();
			EventManager.dispatch(sEventName);

		}.bind(this)


	};
	
    return UI;
});