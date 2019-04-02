/*
//Instance Example.  Create instances using 'new' eg.
//var oInstance_Example = new Instance_Example();
//oInstance_Example.test();
*/

define([],function() {
  'use strict';

    var Instance_Example = function () {
		console.log("Instance_Example init");
    };
	
	Instance_Example.prototype.test = function(){
		console.log('Instance_Example.prototype.test');
	};


    return Instance_Example;
});



