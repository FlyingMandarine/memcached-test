import { MemcacheClient } from 'memcache-client';

// const server = 'test:11211';

// ApTap
// const server = 'bankcardinformation-3ztako.serverless.euw2.cache.amazonaws.com:11211';

// Personal research
const server = 'bankinfocache-9odz8m.serverless.euw2.cache.amazonaws.com:11211';

const client = new MemcacheClient({ server });

console.log('Setting and getting...');

client.set('key', 'data', (err, r) => {
    console.log('err is', err);
    console.log('r is', r);
    console.log('Data inserted');
});

// client.get('key', (err, data) => {
//     console.log('Data obtained!');
//     console.log('err is', err);
//     console.log('data is', data);
// });

console.log('Done.');

client.on('error', (err) => {
    console.error('Memcache client error:', err);
    client.shutdown();
});

// client.shutdown();
