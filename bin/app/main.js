define([
    'PIXI',
    'baseAnimal',
    'dog',
    'cat',
    'stage',
    'UI',
    'factory',
    'event_manager'],
function(
    PIXI,
    BaseAnimal,
    Dog,
    Cat,
    Stage,
    UI,
    Factory,
    EventManager,
    AnimalManager) {
    
    'use strict';

    //Our logic entry point:
    //Main sets our game loop and acts as a 'Mediator' (Mediator design pattern
    //

    var Main = function () {
		console.log("main init");

        EventManager.init();

        Stage.init(this);

        this.cGameEnvironment = new PIXI.Container();
        Stage.cStage.addChild(this.cGameEnvironment);

        this.cUI = new PIXI.Container();
        Stage.cStage.addChild(this.cUI);

        UI.init(this,this.cUI);
        Factory.init(this, this.cGameEnvironment); 

        this.bindUIEvents();     
        this.sState = '';
    };


    Main.prototype.bindUIEvents = function(){
        //Fired from UI
        EventManager.registerListener('onAddDog', this, this.onAddDog);
        EventManager.registerListener('onRemoveDog', this, this.onRemoveDog);
        EventManager.registerListener('onAddCat', this, this.onAddCat);
        EventManager.registerListener('onRemoveCat', this, this.onRemoveCat);
    
        //Fired from stage
        EventManager.registerListener('onTick', this, this.onTick);
    };

    Main.prototype.onAddDog = function(){
        console.log('onAddDog');
        Factory.addNewAnimal('dog');
    };
    Main.prototype.onRemoveDog = function(){
        console.log('onRemoveDog');
        Factory.removeAnimal('dog');
    };
    Main.prototype.onAddCat = function(){
        console.log('onAddCat');
        Factory.addNewAnimal('cat');
    };
    Main.prototype.onRemoveCat = function(){
        console.log('onRemoveCat');
        Factory.removeAnimal('cat');
    };

    //Main update event
    Main.prototype.onTick = function(){
        Stage.devText.text = this.sState;
        Factory.updateAllAnimals();

    };
    
    return Main;
});


	