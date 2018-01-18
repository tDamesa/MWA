var dns = require('dns');
dns.resolve4('www.mum.edu', function(err, address) {
  if (err) throw err;
 console.log('IpAddress:' + JSON.stringify(address)); 
});
 