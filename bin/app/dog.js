define(['baseAnimal'],function(BaseAnimal) {
	'use strict';

	var Dog = function () {
		console.log("Dog init");
		BaseAnimal.call(this);
	};

	Dog.prototype = Object.create(BaseAnimal.prototype);
	var _super_ = BaseAnimal.prototype;

	Dog.prototype.talk = function(){
		console.log('woof');
	};

	return Dog;
});