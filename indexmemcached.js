var Memcached = require('memcached');

const server = 'bankinfocache-9odz8m.serverless.euw2.cache.amazonaws.com:11211';

var memcached = new Memcached(server);

console.log('starting set');

memcached.set('foo', 'bar', 10, function (err) { console.log('err is', err) });

console.log('set end');