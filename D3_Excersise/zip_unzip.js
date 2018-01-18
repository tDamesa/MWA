var fs = require('fs');
var zlib = require('zlib');
var compress = zlib.createGzip();
var decompress = zlib.createGunzip();
var filename = './Sample-Spreadsheet-100-rows.xls.gz';
var readable = fs.createReadStream(filename);

function compressFile(filename) {
  var write = fs.createWriteStream(filename + '.gz');
  readable.pipe(compress).pipe(write);
}

function deCompressFile(filename) {
  var write = fs.createWriteStream(filename.replace('.gz', ''));
  readable.pipe(decompress).pipe(write);
}
if (filename.includes('.gz') === true) {
  deCompressFile(filename);
} else {
  compressFile(filename);
}
