const Events = require('./events.js')

const myListener = new Events();

myListener.addListener('foo', ()=> console.log('foo was called'))

