require("dotenv").config();
const Discord = require('discord.js')
const client = new Discord.Client()

const channel = client.channels.get(606216523329044502);
const hook = new Discord.WebhookClient('611943909110841356','wUP3G8ygpx5-3Iqd5YuvoMkB9Yfk5kXHhLswMUN6RgCGTmczxKxG7n9p6boCggLduHLq');

function handleEvent(eventData){
  hook.send('Event Published');
}

module.exports = handleEvent;