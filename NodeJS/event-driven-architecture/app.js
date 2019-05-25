const ModuleAlpha = require('./ModuleAlpha');
const ModuleBeta = require('./ModuleBeta');

const EventEmitter = require('events').EventEmitter;
const firstEventEmitter = new EventEmitter;

firstEventEmitter.on('Alpha', ModuleAlpha.process);
firstEventEmitter.on('Beta', ModuleBeta.process);


console.log("Beginning");

firstEventEmitter.emit("Alpha", "hoho");
firstEventEmitter.emit("Beta", "haha");


console.log("Dpme");