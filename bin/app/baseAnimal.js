define([
	'PIXI',
	'event_manager'
	],function(
		PIXI,
		EventManager
		) {
	'use strict';

	function BaseAnimal() {
		console.log("BaseAnimal");
	};


	BaseAnimal.prototype.init = function(nID, cGameEnvironment){
		console.log("BaseAnimal init: " + nID);
		this.nID = nID;
		this.cGameEnvironment = cGameEnvironment;
		this.cContainer = new PIXI.Container();
		this.sState = 'readyForNewState';

		
		this.nMinX = 50;
		this.nMaxX = 590;
		this.nMinY = 50;
		this.nMaxY = 400;
		this.nX = Math.random() * this.nMaxX;
		this.nY = Math.random() * this.nMaxY;
		this.constrainToStage();

		this.nVX = 0;
		this.nVY = 0;

		this.initProperties();
		this.createGraphic();
		this.createTalkLabel();
	};

	BaseAnimal.prototype.initProperties = function(){
		this.aStates = ['wait', 'initWalk', 'initTalk'];
		this.sAnimalType = 'baseAnimal';
		this.nScale = 0.4;
		this.nSpeed = 1;
		this.sGreeting = 'hello';
	};

	BaseAnimal.prototype.createGraphic = function(){
		console.log(this.nX + " " + this.nY);
		this.gra =  new PIXI.Graphics();
		this.gra.beginFill(0xFF0000);
		this.gra.drawCircle(0,0,50);
		this.cGameEnvironment.addChild(this.cContainer);
		this.cContainer.addChild(this.gra);
		this.cContainer.position.x = this.nX;
		this.cContainer.position.y = this.nY;
	};

	BaseAnimal.prototype.createTalkLabel = function(){
		this.txt = new PIXI.Text(this.sGreeting , {fontFamily:"Verdana, Geneva, sans-serif", fontSize:"20px", fill:"#000000", align:'center'});
		this.cContainer.addChild(this.txt);
		this.txt.anchor.x = 0.5;
		this.txt.anchor.y = 0.5;
		this.txt.position.y = -50;
		this.txt.visible = false;
	};

	BaseAnimal.prototype.talk = function(){
		//So this could be an abstract function - never designed to be called directly
		//so throw an error or something
		console.log('hi - I really shouldnt be speaking');
	};
	BaseAnimal.prototype.sneeze = function(){
		//Whereas this one could be designed to be called from extended modiles
		console.log('achooo');
	};
	
	BaseAnimal.prototype.update = function(){
		//console.log(this.nID);
		this.stateUpdate();
		switch(this.sState){
			case 'wait':
				this.wait();
			break;
			case 'initWalk':
				this.initWalk();
			break;
			case 'walking':
				this.walking();
			break;
			case 'initTalk':
				this.initTalk();
			break;
			case 'talking':
				this.talking();
			break;
		}
	};

	BaseAnimal.prototype.stateUpdate = function(){
		if(this.sState === 'readyForNewState'){
			this.sState = this.aStates[parseInt(Math.random()*this.aStates.length)];
		}
	};

	BaseAnimal.prototype.updateVelocity = function(){
		this.nVX  = this.returnDirMultiplier() * this.nSpeed;
		this.nVY  = this.returnDirMultiplier() * this.nSpeed;
	};

	BaseAnimal.prototype.updatePosition = function(){
		this.nX += this.nVX;
		this.nY += this.nVY;
		this.cContainer.position.x = this.nX;
		this.cContainer.position.y = this.nY;
	};

	BaseAnimal.prototype.constrainToStage = function(){
		if(this.nX < this.nMinX){
			this.nX = this.nMinX;
			this.nVX = this.nVX*-1;
		}
		if(this.nX > this.nMaxX){
			this.nX = this.nMaxX;
			this.nVX = this.nVX*-1;
		}
		if(this.nY < this.nMinY){
			this.nY = this.nMinY;
			this.nVY = this.nVY*-1;
		}
		if(this.nY > this.nMaxY){
			this.nY = this.nMaxY;
			this.nVY = this.nVY*-1;
		}
	};

	BaseAnimal.prototype.returnDirMultiplier = function(){
		var aMultipliers = [-1,0.5,0,0.5,1];
		return aMultipliers[parseInt(Math.random()*aMultipliers.length)];
	};


	BaseAnimal.prototype.wait = function(){
		if(Math.random() > 0.9){
			this.sState = 'readyForNewState';
		}
	};

	BaseAnimal.prototype.initWalk = function(){
		this.updateVelocity();
		this.sState = 'walking';
	};

	BaseAnimal.prototype.walking = function(){
		this.updatePosition();
		if(Math.random() > 0.99){
			this.sState = 'readyForNewState';
		}
		this.constrainToStage();
	};


	BaseAnimal.prototype.initTalk = function(){
		this.nTalkCount = 0;
		this.txt.visible = true;
		this.sState = 'talking';
	};
	BaseAnimal.prototype.talking = function(){
		this.nTalkCount++;
		if(this.nTalkCount > 20){
			this.txt.visible = false;
		}
		if(this.nTalkCount > 30){
			this.sState = 'readyForNewState';
		}
	};




	BaseAnimal.prototype.destroy = function(){
		this.cContainer.destroy();
	};
	return BaseAnimal;
});

