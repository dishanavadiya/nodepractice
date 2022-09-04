var url = require('url');
var adr = 'http://www.nodejs.org/default.htm?year=2021&month=february';
var q = url.parse(adr,true); //parseQueryString <boolean> If true, the query property will always be set to an object returned by the querystring module's parse() method. If false, the query property on the returned URL object will be an unparsed, undecoded string. Default: false.

console.log(q.host); //returns www.nodejs.org
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2021&month=february' Gets and sets the serialized query portion of the URL.

var qdata = q.query; //returns an object: { year: 2021, month: 'february' }
console.log(qdata.month); //returns 'february'