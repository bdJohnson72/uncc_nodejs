const { Buffer } = require('buffer');

const myBuffer = Buffer.alloc(4);
console.log(myBuffer);
myBuffer[0] = 0xf4
myBuffer[1] = 0xffff
console.log(myBuffer);
console.log(myBuffer[0]);
console.log(myBuffer[1]);