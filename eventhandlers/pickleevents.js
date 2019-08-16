require("dotenv").config();
const Discord = require('discord.js')
const client = new Discord.Client()

const channel = client.channels.get(606216545336557601);
const hook = new Discord.WebhookClient('611944183892148224','jSenHxsBz1w-pGT0SuAl0rVR7-DrsZHozGmCI0dBSWLREB8RFPQkuqku61tPOQu69eKP');

function handleEvent(eventData){
  hook.send('Event Published');
}

module.exports = handleEvent;