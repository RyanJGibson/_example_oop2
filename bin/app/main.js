define(['static_example', 
    'instance_example', 
    'base', 
    'extended',
    'baseAnimal',
    'dog',
    'cat'],
function(StaticExample, 
    InstanceExample, 
    Base, 
    Extended,
    BaseAnimal,
    Dog,
    Cat) {
  'use strict';

    var Main = function () {
		console.log("main init");
		this.test();
    };
	
	Main.prototype.test = function(){
        /*
        StaticExample.test();
        InstanceExample.test();// will cause an error
        var oInstanceExample = new InstanceExample();
        oInstanceExample.test();

        var oBase = new Base();
        var oExtended = new Extended();
        oBase.talk();
        oExtended.talk();
        oExtended.sneeze();
        */
        

        //Simple example of encapsulation, inheritance, abstraction and polymorphism
        //Dog and Cat both extend base animal.
        //Both animals may sneeze, but say different things when they talk.

        //talk() is an abstract function in the base module, never called directly
        //sneeze() is inherited from the base animal class by both dog and cat 

        //Polymorphism is demonstrated by the fact tha both animals 'talk'
        //but their behviour differs.

        var oDog = new Dog();
        var oCat = new Cat();

        oDog.talk();
        oCat.talk();

        oDog.sneeze();
        oCat.sneeze();

        oCat.talkThenSneeze();
	};
    
    return Main;
});


	