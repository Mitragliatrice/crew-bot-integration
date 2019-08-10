require("dotenv").config();
const processCommand = require('./dispatchers/commandDispatcher')
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () =>{
    const channel = client.channels.get('606253185178402836')
    channel.send('Bot is ready to rumble')
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }
    
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})



client.login(process.env.BOT_TOKEN_CREW)
