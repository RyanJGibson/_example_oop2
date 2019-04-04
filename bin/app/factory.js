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

		console.log(this.aAllAnimals);
	};


	Factory.removeAnimal = function(sAnimal){
		for(let i=0;i<this.aAllAnimals.length;i++){
			var oAnimal = this.aAllAnimals[i];
			if(oAnimal.sAnimalType == sAnimal){
				var nElementToRemove = i;
			}
		}

		oAnimal = this.aAllAnimals[nElementToRemove];
		if(oAnimal){
			oAnimal.destroy();
			this.aAllAnimals.splice(nElementToRemove,1);
		}

	};

	
	Factory.updateAllAnimals = function(){
		for(let i=0;i<this.aAllAnimals.length;i++){
			var oAnimal = this.aAllAnimals[i];
			oAnimal.update();
		}
	};

    return Factory;
});
