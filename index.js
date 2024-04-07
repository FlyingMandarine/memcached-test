var memcache = require("memcache-client");
const client = new memcache.MemcacheClient({server: "bankinfocache-9odz8m.serverless.euw2.cache.amazonaws.com:11211", tls: {}});
client.set("key", "value");