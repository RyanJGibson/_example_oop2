define(['baseAnimal'],function(BaseAnimal) {
	'use strict';

	var Cat = function () {
		console.log("Cat");
		BaseAnimal.call(this);
	};

	Cat.prototype = Object.create(BaseAnimal.prototype);
	Cat.prototype.constructor = Cat;
	
	var _super_ = BaseAnimal.prototype;

	//Override base functionality or add specific functionality 

	Cat.prototype.initProperties = function(){

		_super_.initProperties.apply(this);

		//cats have an additional purring state not present in dogs
		this.aStates.push('initPurr');
		this.aStates.push('purring');

		this.sAnimalType = 'cat';
		this.nScale = 0.4;
		this.nSpeed = 2;
		this.sGreeting = 'meow!';
	};

	Cat.prototype.createGraphic = function(){
		this.cContainer = new PIXI.Container();
		this.gra =  new PIXI.Graphics();

		this.gra.beginFill(0x000000);
		this.gra.drawCircle(0,0,40);
		
		this.gra.drawPolygon([
		 -40, 0,
		 -40, -60,
		 0, 0]);

		this.gra.drawPolygon([
		 40, 0,
		 40, -60,
		 0, 0]);

		this.gra.beginFill(0xFFCCCC);
		this.gra.drawCircle(0,0,10);


		this.gra.scale.x = this.gra.scale.y = this.nScale;

		this.cGameEnvironment.addChild(this.cContainer);
		this.cContainer.addChild(this.gra);
		this.cContainer.position.x = this.nX;
		this.cContainer.position.y = this.nY;

		this.sneeze();
	};


	Cat.prototype.update = function(){
		//run our base update, then additionally check for specific cat behaviour
		_super_.update.apply(this);
		switch(this.sState){
			case 'initPurr':
				this.initPurr();
			break;
			case 'purring':
				this.purring();
			break;
		}
	};

	Cat.prototype.initPurr = function(){
		this.nPurrCount = 0;
		this.txt.visible = true;
		this.txt.text = 'Purrrr!';
		this.sState = 'purring';
	};
	Cat.prototype.purring = function(){
		this.nPurrCount++;
		if(this.nPurrCount > 20){
			this.txt.visible = false;
		}
		if(this.nPurrCount > 30){
			this.sState = 'readyForNewState';
		}
	};


	return Cat;
});