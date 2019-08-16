require("dotenv").config();
const Discord = require('discord.js')
const client = new Discord.Client()

const channel = client.channels.get(606253185178402836);
const hook = new Discord.WebhookClient('611852859520319498','20h2Dy5X1564_TnfFWpvDXiglVBqHtRCwOWoOUIgJcZq_yM_wdl5VHzqkSWOgpSdBudT');

function handleEvent(eventData){
  hook.send('Event Published from unknown user: '+eventData);
}

module.exports = handleEvent;