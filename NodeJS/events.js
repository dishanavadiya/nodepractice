const events=require("events");
const myEmitter=new events.EventEmitter();

//myEmitter.on("eventname",(event,listener)=>{})
myEmitter.on('newListener', (event, listener) => {
  console.log('Listener added');
  if (event === 'event1') {
      console.log('Listener added for event1');
  }
});
myEmitter.on('event1', () => {
    console.log('Event1 L1!');
  });

myEmitter.on('event1', () => {
  console.log('Event1 L2!');
});
myEmitter.on('event2', () => {
  console.log('event2');
});
myEmitter.emit('event1');
myEmitter.emit('event2');