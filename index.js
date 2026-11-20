const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'infinitesmp16.aternos.me', // Maslan: myserver.aternos.me
  port: 56731, // Apna Port number yahan likhein
  username: 'AFK_Bot', // Bot ka koi bhi naam
  version: 'false' // Apne server ka exact version likhein
})

bot.on('spawn', () => {
  console.log('Bot server mein join ho gaya hai!')
  // Bot ko har 10 second baad jump karwane ke liye taake kick na ho
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => {
      bot.setControlState('jump', false)
    }, 500)
  }, 10000)
})

bot.on('error', (err) => console.log('Error:', err))
bot.on('end', () => console.log('Bot server se disconnect ho gaya.'))
