define(['baseAnimal'],function(BaseAnimal) {
	'use strict';

	var Dog = function () {
		console.log("Dog");
		BaseAnimal.call();
	};

	Dog.prototype = Object.create(BaseAnimal.prototype);
	Dog.prototype.constructor = Dog;
	
	var _super_ = BaseAnimal.prototype;


	//Override base functionality or add specific functionality 

	Dog.prototype.initProperties = function(){
		this.nSpeed = 1;
		this.nScale = 0.3;
	};

	Dog.prototype.createGraphic = function(){
		this.cContainer = new PIXI.Container();
		this.gra =  new PIXI.Graphics();

		this.gra.beginFill(0x90710B);

		this.gra.drawRect(-50,-50,100,100);
		this.gra.drawRect(-50,-75,25,25);
		this.gra.drawRect(25,-75,25,25);
		this.gra.beginFill(0x000000);
		this.gra.drawCircle(0,0,30);

		this.gra.scale.x = this.gra.scale.y = this.nScale;

		this.cGameEnvironment.addChild(this.cContainer);
		this.cContainer.addChild(this.gra);
		this.cContainer.position.x = this.nX;
		this.cContainer.position.y = this.nY;
	};

	Dog.prototype.talk = function(){
		console.log('woof');
	};


	return Dog;
});