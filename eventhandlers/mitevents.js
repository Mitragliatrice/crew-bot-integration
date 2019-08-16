require("dotenv").config();
const Discord = require('discord.js')
const client = new Discord.Client()

const channel = client.channels.get(440700491349884929);
const hook = new Discord.WebhookClient('611943616512000001','TKswws8jY1ypr6OZJqjxrqI-FRHiSAbFW9cIdUPyp_y_OUqlleOEaD0yEs-KSsPH2bw_');

function handleEvent(eventData){
  hook.send('Event Published');
}

module.exports = handleEvent;