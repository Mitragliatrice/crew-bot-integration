//This is an endpoint that handles any published events.

const mit = requires('./eventhandlers/mitevents')
const sac = requires('./eventhandlers/sacsideevents')
const pick = requires('./eventhandlers/pickleevents')
const misc = requires('./eventhandlers/miscevents')
const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express'),
app = express();

app.post('/publishevent', function (req, res) {
  console.log(">>>>> New Event Via /publishevent <<<<<");
  // console.log(`New {Published Event} for {StreamID Here}`)
  console.log(req);

	let event = req.data;
	if(data.id == "52404043"){ //Sacside Stream Event
    //Do Sacside Things
    console.log("SACSIDE Event regestered");
    sac.handleEvent(req.data);
	} else if (data.id == "51831700"){ //Mit Stream Event
    // Do Mit Things
    console.log("MIT Event regestered");
    mit.handleEvent(req.data);
	} else if (data.id == "21384358") { //Pickle Stream Event
		// Do Pickle Things
    console.log("PICKLE Event regestered");
    pick.handleEvent(req.data);
	} else { //feed these to #technical-testing
    console.log("MISC Event regestered");
    misc.handleEvent(req.data);
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
