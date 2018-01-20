const Rx = require('@reactivex/rxjs');
const subject = new Rx.Subject();
const url = require('url');
const { fork } = require('child_process');
const http = require('http');

function writeFile(param) {
  const request = param.req;
  const response = param.res;
  var queryData = url.parse(request.url, true).query;
  var filePath = queryData.url;
  if (filePath) {
    const childprocess = fork('read-file.js');
    childprocess.on('message', data => {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end(data);
    });
    childprocess.send(filePath);
  }
}

subject.subscribe(writeFile);
http
  .createServer((req, res) => {
    subject.next({ req: req, res: res });
  })
  .listen(8000);

console.log('server running');
