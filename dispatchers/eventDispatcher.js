//This is an endpoint that handles any published events.

const evt = require('../eventhandlers/eventDex')
const decorate = require('../middleware/decorator.middleware');
const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express'),
app = express();

decorate(app);

app.post('/publishevent', function (req, res) {
  console.log(">>>>> New Event Via /publishevent <<<<<");
  // console.log(`New {Published Event} for {StreamID Here}`)
  console.log(req.body);
	let event = req.body.data[0];
	console.log(event.id);

	if(event.id == '52404043'){
    console.log("SACSIDE Event regestered");
    evt.handleSac(event);
	} else if (event.id == "51831700"){
    console.log("MIT Event regestered");
    evt.handleMit(event);
	} else if (event.id == "21384358") {
    console.log("PICKLE Event regestered");
    evt.handlePick(event);
	} else { //feed these to #technical-testing
    console.log("MISC Event regestered");
    evt.handleMisc(event);
	}


	
    res.status(200);
    res.write("Success");
    res.end()
});

let server = app.listen(80, function () {
  console.log("Now listening on port 80 for publications.")

})
