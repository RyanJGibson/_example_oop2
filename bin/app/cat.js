define(['baseAnimal'],function(BaseAnimal) {
	'use strict';

	var Cat = function () {
		console.log("Cat");
		BaseAnimal.call();
	};

	Cat.prototype = Object.create(BaseAnimal.prototype);
	Cat.prototype.constructor = Cat;
	
	var _super_ = BaseAnimal.prototype;

	//Override base functionality or add specific functionality 

	Cat.prototype.initProperties = function(){
		this.sAnimalType = 'cat';
		this.nSpeed = 2;
		this.nScale = 0.3;
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
	};

	Cat.prototype.talk = function(){
		console.log('meow');
	};


	return Cat;
});