var Memcached = require('memcached');

const server = 'bankinfocache-9odz8m.serverless.euw2.cache.amazonaws.com:11211';

var memcached = new Memcached(server);

console.log('starting set');

memcached.touch('key', 10, function (err) { 'touch', err });
memcached.set('foo', 'bar', 10, function (err) { console.log('set', err) });
memcached.get('foo', function (err, data) {
    console.log('get', data);
});

console.log('set end');