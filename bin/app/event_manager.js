/*
//Used to register and transmit events
*/

define([],function() {
  'use strict';

    var EventManager = {};
	
	EventManager.init = function(){
		console.log('EventManager.Init');
		this.nListenerIDCount = 0;
		this.aListeners = [];// a series of objects 
		// structured based on eventName
		// each eventName can dispatch to multiple registered Listeners
		/*
		this.aObervers = [
			event{
				sEventName:'event1',
				aListeners:[
					oListener:{
						nListenerID: [a unique ID]
						oContext: [the object registering the Listener - if undefined, we remove this Listener object]
						fFunc: [the function to run if the event is dispatched]
					}
				]
			}

		]
		*/
	};


	EventManager.registerListener = function(sEventName, oContext, fFunc){
		//does event name already exist?

		var oEventObj = this.returnEventObject(sEventName);

		if(oEventObj === undefined){
			//create a new event object
			oEventObj = {};
			oEventObj.sEventName = sEventName;
			oEventObj.aListeners =[];
			this.aListeners.push(oEventObj);
		}

		var oListener = {};
		oListener.oContext = oContext;
		oListener.fFunc = fFunc;
		oListener.nID = this.nListenerIDCount;
		this.nListenerIDCount++;

		oEventObj.aListeners.push(oListener);

		console.log('EventManager.registerListener');
		console.log(this.aListeners);

	};

	EventManager.dispatch = function(sEventName, oData){
		for(let i=0;i<this.aListeners.length; i++){
			var oListener = this.aListeners[i];
			if(sEventName === oListener.sEventName){
				for(let i=0;i<oListener.aListeners.length;i++){
					var oUniqueListener = oListener.aListeners[i];
					var oContext = oUniqueListener.oContext;
					var fFunc = oUniqueListener.fFunc;
					if(oContext){
						fFunc.call(oContext, oData)
					}else{
						//remove the oUniqueListener
					}
				}
			}
		}
	};



	EventManager.returnEventObject = function(sName){
		for(let i=0;i<this.aListeners.length;i++){
			var oEvent = this.aListeners[i];
			if(sName == oEvent.sEventName){
				return(oEvent);
			}
		}
	};






    return EventManager;
});

