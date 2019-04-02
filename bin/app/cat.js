define(['baseAnimal'],function(BaseAnimal) {
	'use strict';

	var Cat = function () {
		console.log("Cat init");
		BaseAnimal.call(this);
	};

	Cat.prototype = Object.create(BaseAnimal.prototype);
	var _super_ = BaseAnimal.prototype;

	Cat.prototype.talk = function(){
		console.log('meow');
	};

	Cat.prototype.talkThenSneeze = function(){
		//example of how functionality can be run in the super
		this.talk();
		_super_.sneeze();
	};

	return Cat;
});