//create file.txt, rename f2.txt to f1.txt
var fs = require('fs');

fs.writeFile('./files/file1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Write file!');
}); 

fs.appendFile('./files/file2.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Appended!!');
}); 

fs.readFile('./files/file3.txt', 'utf-8',   function (err,data) {
  if (err) throw err;
  console.log("File read="+data);
});

fs.rename('./files/f1.txt', './files/f2.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

fs.unlink('./files/file.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});