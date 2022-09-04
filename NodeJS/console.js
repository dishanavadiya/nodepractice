console.log(__filename);
console.log(__dirname);
function printHello() {
   console.log( "Hello!");
}  
var t = setTimeout(printHello, 2000);
//clearTimeout(t);

console.time("label1");
const name1 = 'abc';  
var a={name:"abc",salary:2000};
console.warn(`Warning ${name1}! `);   
//process.exit();
console.timeEnd('label1');

console.info("Program Output");
// Printing to console
process.stdout.write("Hello World!" + "\n");
// Reading passed parameter : Command line arguments


// process.argv.forEach(function(v,i){});
process.argv.forEach(function(val, index) {
   console.log(index + ': ' + val);
});

console.log(process.execPath); // Getting executable path
console.log(process.platform); // Platform Information

 console.log(process.env);
//console.error(new Error('Error msg.'));