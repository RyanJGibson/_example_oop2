define([],function() {
  'use strict';

    var Factory = {};

    Factory.init = function(){
		console.log('Factory.Init');
	};
	
	Factory.addNewAnimal = function(sAnimal){
		console.log('AddNewAnimal');
	};

    return Factory;
});
