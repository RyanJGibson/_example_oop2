define([
	'PIXI',
	'event_manager'
	],
	function(
		PIXI,
		EventManager
		) {
  	'use strict';

    var Stage = {};

    Stage.init = function(oMain){
        this.nCanvasWidth = 640;
        this.nCanvasHeight = 480;
    
        console.log("this.nCanvasWidth: " + this.nCanvasWidth);
        console.log("this.nCanvasHeight: " + this.nCanvasHeight);
        
        this.renderer = PIXI.autoDetectRenderer(this.nCanvasWidth,this.nCanvasHeight,{
            backgroundColor: 0xCCCCCC
        });
        
        this.cStage = new PIXI.Container();
        $("#IDstage").append(this.renderer.view);
        
        this.devText = new PIXI.Text("Dev Text", {fontFamily:"Verdana, Geneva, sans-serif", fontSize:"20px", fill:"#000000"});
        this.cStage.addChild(this.devText);

        this.devText.text = 'dev'
        this.draw();


	};

	Stage.draw = function(){
		this.renderer.render(this.cStage);
        window.requestAnimationFrame(function(){
            this.tick();
            this.draw();
        }.bind(this));
	};



    //Main update event
    Stage.tick = function(){
        //this.devText.text = this.sMode;
        EventManager.dispatch('onTick');
    };

	
    return Stage;
});