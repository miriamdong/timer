const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');


process.stdin.on('data', (key) => {
  let n = parseInt(key);
  if ((n > 0 && n < 10) || n === 'b') {
    console.log(`setting timer for ${ key} seconds...\r \n  `);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
  if (key === 'b') {
    process.stdout.write('\x07');
  }


  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }

});


// process.stdin.on('keypress', (c, k) => {
//   callback();
// });

// rl.on('close', (input) => {
//   if (input > 0 && input < 10) {
//     console.log(`setting timer for ${ input } seconds...`);
//     setTimeout(() => {
//       process.stdout.write('\x07');
//     }, input * 1000);
//   }
//   console.log('Thanks for using me, ciao!');
// });