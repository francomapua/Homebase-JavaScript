const MyEventEmitter = require('./MyEventEmitter');


var ModuleAlpha = {
    init : function(){
        const myEmitter = new MyEventEmitter();
        myEmitter.on("alpha", this.process);
    },
    process : function(input){
        console.log("ModuleAlpha has received " + input);
    }
}

module.exports = ModuleAlpha;