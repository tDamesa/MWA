var fs = require('fs');
var server = require('http').createServer(function(req, res) {
  console.log('request has been made');
});
 server.on('request', function(req, res) {
//   fs.readFile('./Pizigani_1367_Chart_10MB.jpg', function(err, data) {
//     if (err) throw err;
//     res.writeHead(200, { 'Content-Type': 'image' });
//     res.write(data);
//     res.end();
// });
    var readable = fs.createReadStream('./Pizigani_1367_Chart_10MB.jpg');
    readable.pipe(res);

});
server.listen(8000);
console.log('server is running');
