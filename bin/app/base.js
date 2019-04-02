define([],function() {
	'use strict';

	var Base = function () {
		console.log("Base init");
		this.nMyName = 'base';
	};

	Base.prototype.test = function(){
		console.log('Base.prototype.test');
	};

	Base.prototype.talk = function(){
		//So this could be an abstract function - never designed to be called directly
		//so throw an error or something
		console.log('hi - I really shouldnt be speaking');
	};

	Base.prototype.sneeze = function(){
		//Whereas this one could be designed to be called from extended modiles
		console.log('achooo');
	};

	return Base;
});


