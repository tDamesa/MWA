const os = require('os');
const Rx = require('@reactivex/rxjs');
console.log('checking your system....');
const source = Rx.Observable.create(function(observer) {
  let cpus = os.cpus().length;
  const memory = os.totalmem();
  if (cpus <= 2) {
    observer.next('processor is not supported');
  }
  if (memory < 4000000000) {
    observer.next('This app needs at least 4GB of RAM');
  }
  if (memory >= 4000000000 && cpus > 2) {
    observer.next('system is checked successfuly');
  }
  observer.complete();
});

var subscription = source.subscribe(
  function(message) {
    console.log(message);
  },
  function(err) {
    console.error(err);
  },
  function() {
    console.info('---------------------');
  }
);
subscription.unsubscribe();
