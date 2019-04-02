define(['PIXI'],function(PIXI) {
  'use strict';

    var UI = {};

    UI.init = function(oMain){
		console.log('UI.Init');
		this.cUI = new PIXI.Container();
		oMain.cStage.addChild(this.cUI);

		this.aButtons = [];

	
	};


	UI.bindAddDog = function(fFunction){
		this.onAddDog = fFunction;
	};
	UI.bindAddCat = function(fFunction){
		this.onAddCat = fFunction;
	};
	UI.bindRemoveDog = function(fFunction){
		this.onRemoveDog = fFunction;
	};
	UI.bindRemoveCat = function(fFunction){
		this.onRemoveCat = fFunction;
	};


	UI.createButtons = function(){
		this.createButton('ADD DOG', 120, 50, 65, 450, this.onAddDog.bind(this));	
		this.createButton('REMOVE DOG', 180, 50, 220, 450, this.onRemoveDog.bind(this));	
		this.createButton('ADD CAT', 120, 50, 390, 450, this.onAddCat.bind(this));	
		this.createButton('REMOVE CAT', 180, 50, 545, 450, this.onRemoveCat.bind(this));	
	};





	UI.createButton = function(sLabel, nWidth, nHeight, nX, nY, fFunc){
		console.log('UI.createButton');

		var oButton = {};

		oButton.cButton = new PIXI.Container();

		var gra = new PIXI.Graphics();
		gra.beginFill(0xFF0000);
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
			fFunc();
		}.bind(this)


	};
	
    return UI;
});