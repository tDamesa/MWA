var EventEmitter=require('events');

class Clock extends EventEmitter {
  constructor() {
    super();
  }
  tickEmit() {
    this.emit('tick');
  }
}

var cObj = new Clock();
cObj.on('tick', function() {
  setTimeout(() => {
    console.log('woohooo!');
  }, 1000);
});
cObj.tickEmit();