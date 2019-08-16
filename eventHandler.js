//This is an endpoint that handles any published events.

const mit = require('./eventhandlers/mitevents')
const sac = require('./eventhandlers/sacsideevents')
const pick = require('./eventhandlers/pickleevents')
const misc = require('./eventhandlers/miscevents')
const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express'),
body = require('body-parser'),
app = express();

app.use(body.json());

app.post('/publishevent', function (req, res) {
  console.log(">>>>> New Event Via /publishevent <<<<<");
  // console.log(`New {Published Event} for {StreamID Here}`)
  console.log(req.body);
	let event = req.body.data[0];
	console.log(event.id);

	if(event.id == '52404043'){
    console.log("SACSIDE Event regestered");
    sac.handleEvent(event);
	} else if (event.id == "51831700"){
    console.log("MIT Event regestered");
    mit.handleEvent(event);
	} else if (event.id == "21384358") {
    console.log("PICKLE Event regestered");
    pick.handleEvent(event);
	} else { //feed these to #technical-testing
    console.log("MISC Event regestered");
    misc.handleEvent(event);
	}

	
	//window.addEventListener('onError', function(e) {
	//	channel.send(e.error.message) // or client.sendMessage(channel, e.error.message) in older versions;
	//});
	
    res.status(200);
    res.write("Hello World");
    res.end()
});

let server = app.listen(80, function () {
  console.log("Now listening on port 80 for publications.")

})
