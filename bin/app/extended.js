define(['base'],function(Base) {
	'use strict';

	var Extended = function () {
		console.log("Extended init");
		Base.call(this);
	};

	Extended.prototype = Object.create(Base.prototype);
	var _super_ = Base.prototype;

	Extended.prototype.test = function(){
		console.log('Extended.prototype.test');
	};

	Extended.prototype.talk = function(){
		console.log('why hello there');
	};

	Extended.prototype.sneeze = function(){
		_super_.sneeze();
	};

	return Extended;
});


