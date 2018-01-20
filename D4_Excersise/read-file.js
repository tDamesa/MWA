const fs = require('fs');

function readData(filePath) {
  return new Promise(function(resolve, reject) {
    const readStream = fs.createReadStream(__dirname + '/' + filePath, 'utf8');
    let data = '';
    readStream
      .on('data', function(chunk) {
        data += chunk;
      })
      .on('end', function() {
        resolve(data);
      })
      .on('error', function(err) {
        reject(err);
      });
  });


}
process.on('message', filePath => {
  readData(filePath).
  then(function(data){
    process.send(data);  
  }).catch(function(err){
    process.send(err.message);
  })
});
