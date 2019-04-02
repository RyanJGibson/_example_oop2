define([],function() {
	'use strict';

	var BaseAnimal = function () {
		console.log("BaseAnimal init");
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

	return BaseAnimal;
});

