var events = require("events");
var fs = require('fs');
var eventsEmitter = new events.EventEmitter();

eventsEmitter.on('read',readFileContent);
eventsEmitter.on('display',displayFileContent);
eventsEmitter.on('finished',finished);

eventsEmitter.emit('read','./files/file2.txt');

function readFileContent(fileName){
    console.log("Reading " + fileName + " file started:");
    
    fs.readFile(fileName, 'utf8', function 	(err,data) {
    	// console.log("Reading " + fileName + 
    	// 	" file done successfully.");
    	eventsEmitter.emit('display',data);
	});
}

function  displayFileContent(data){
    console.log("File Data:");
    console.log(data);
    eventsEmitter.emit('finished');
}

function finished(){
  console.log("Reading and Printing File content job is done successfully.");
}