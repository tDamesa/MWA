const os = require('os');

function checkSystem() {
  console.log('checking your system....');
  let cpus = os.cpus().length;
  const memory = os.totalmem();

  if (cpus <= 2) {
    console.log('processor is not supported');
  }
  if (memory < 4000000000) {
    console.log('This app needs at least 4GB of RAM');
  }
  if (memory >= 4000000000 && cpus > 2) {
    console.log('system is checked successfuly');
  }
}
checkSystem();

