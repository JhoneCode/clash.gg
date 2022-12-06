
const { Client, BatchThrottler } = require('clashofclans.js')
const client = new Client({
  cache: true,
  retryLimit: 1,
  restRequestTimeout: 5000,
  throttler: new BatchThrottler(20)
})

client.events.addClans(['#2LC88PYUG'])
client.events.setClanEvent({
  name: 'clanDescriptionChange',
  filter: (oldClan, newClan) => {
    return oldClan.description !== newClan.description
  }
})

client.on('clanDescriptionChange', (oldClan, newClan) => {
  console.log(oldClan.description, newClan.description)
});

(async function () {
  await client.login({ email: 'joaopedro.castrovieira@gmail.com', password: 'Jp20Cv2022@' })
  await client.events.init()
})()
