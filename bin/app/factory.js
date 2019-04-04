define(
	['dog',
    'cat'],
    function(Dog,
    	Cat) {
  'use strict';

    var Factory = {};

    Factory.init = function(oMain, cGameEnvironment){
		console.log('Factory.Init');
		this.oMain = oMain;
		this.cGameEnvironment = cGameEnvironment;
		this.nAnimalUniqueIDCount = 0;
		this.aAllAnimals = [];
	};
	
	Factory.addNewAnimal = function(sAnimal){
		console.log('AddNewAnimal: ' + sAnimal);
		var oAnimal={};
		switch(sAnimal){
			case 'dog':
				oAnimal = new Dog();
			break;
			case 'cat':
				oAnimal = new Cat();
			break;
		}
		
		this.aAllAnimals.push(oAnimal);
		oAnimal.init(this.nAnimalUniqueIDCount, this.cGameEnvironment);
		this.nAnimalUniqueIDCount++;

		oAnimal.talk();

		console.log(this.aAllAnimals);
	};

	
	Factory.updateAllAnimals = function(){
		for(let i=0;i<this.aAllAnimals.length;i++){
			var oAnimal = this.aAllAnimals[i];
			oAnimal.update();
		}
	};

    return Factory;
});
