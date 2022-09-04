var fs = require('fs');

// var data = fs.readFileSync( "./files/file1.txt","utf-8" );
// console.log( data );

fs.readFile( "./files/file1.txt","utf-8", function( err, data ) {
    console.log(data);
    });

console.log( "File reading complete!!" );