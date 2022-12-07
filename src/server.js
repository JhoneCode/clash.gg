require('dotenv').config()
const { Client, QueueThrottler } = require('clashofclans.js')

const client = new Client({
  keys: [process.env.API_KEY],
  retryLimit: 1,
  restRequestTimeout: 5000,
  throttler: new QueueThrottler(100)
})

console.log(client.events)
