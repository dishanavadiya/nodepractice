var events = require("events");
var eventsEmitter = new events.EventEmitter();

eventsEmitter.on("event1",event1Hadler); //assign 

function event1Hadler(){
    console.log("event1");
}
eventsEmitter.emit("event1");