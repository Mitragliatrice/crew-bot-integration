//This is an endpoint that handles any published events.

const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express'),
app = express();

app.post('/publishevent', function (req, res) {
  console.log(">>>>> New Event Via /publishevent <<<<<");
    console.log(`New {Published Event} for {StreamID Here}`)
    console.log(req);
    // let chanID = "606253185178402836"; //Tecnical Testing Channel
    // client.channels.get(chanID).send(req.body);
    res.status(200);
    res.write("Hello World");
    res.end()
});

let server = app.listen(80, function () {
  console.log("Now listening on port 80 for publications.")

})
