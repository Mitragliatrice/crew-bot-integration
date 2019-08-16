//This is an endpoint that handles any published events.

const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express'),
app = express();

app.post('/publishevent', function (req, res) {
    console.log(">>>>> New Event Via /publishevent <<<<<");
    console.log(`New {Published Event} for {StreamID Here}`)
    console.log(req);

    const channel = client.channels.get(606253185178402836);
    const hook = new Discord.WebhookClient('611852859520319498','20h2Dy5X1564_TnfFWpvDXiglVBqHtRCwOWoOUIgJcZq_yM_wdl5VHzqkSWOgpSdBudT');
    hook.send('Event Published');

    res.status(200);
    res.write("Hello World");
    res.end()
});

let server = app.listen(80, function () {
  console.log("Now listening on port 80 for publications.")

})
