define([
    'PIXI',
    'baseAnimal',
    'dog',
    'cat',
    'UI',
    'factory'],
function(
    PIXI,
    BaseAnimal,
    Dog,
    Cat,
    UI,
    Factory) {
    
    'use strict';

    //Our logic entry point:
    //Main sets our game loop and acts as a 'Mediator' (Mediator design pattern
    //

    var Main = function () {
		console.log("main init");
        
        this.initStage();
        
        UI.init(this);
        this.bindUIEvents();
        UI.createButtons();

        Factory.init(this); 
        this.renderer.render(this.cStage);

		//this.test();
    };


    Main.prototype.initStage = function(){
        this.nCanvasWidth = 640;
        this.nCanvasHeight = 480;
    
        console.log("this.nCanvasWidth: " + this.nCanvasWidth);
        console.log("this.nCanvasHeight: " + this.nCanvasHeight);
        
        this.renderer = PIXI.autoDetectRenderer(this.nCanvasWidth,this.nCanvasHeight,{
            backgroundColor: 0xFFCCCC
        });
        
        this.cStage = new PIXI.Container();
        $("#IDstage").append(this.renderer.view);
        
        this.devText = new PIXI.Text("Dev Text", {fontFamily:"Verdana, Geneva, sans-serif", fontSize:"20px", fill:"#000000"});
        this.cStage.addChild(this.devText);

        this.devText.text = 'sadfadf'
        this.draw();

    };

    Main.prototype.draw = function(){
        this.renderer.render(this.cStage);
        window.requestAnimationFrame(function(){
            this.draw();
        }.bind(this));
    };




    Main.prototype.bindUIEvents = function(){
        UI.bindAddDog(this.onAddDog.bind(this));
        UI.bindAddCat(this.onAddCat.bind(this));
        UI.bindRemoveDog(this.onRemoveDog.bind(this));
        UI.bindRemoveCat(this.onRemoveCat.bind(this));
    };


    Main.prototype.onAddDog = function(){
        console.log('onAddDog');
    };
    Main.prototype.onRemoveDog = function(){
        console.log('onRemoveDog');
    };
    Main.prototype.onAddCat = function(){
        console.log('onAddCat');
    };
    Main.prototype.onRemoveCat = function(){
        console.log('onRemoveCat');
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


	