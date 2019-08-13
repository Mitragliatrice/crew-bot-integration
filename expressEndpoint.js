const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express'),
app = express();

app.post('/publishevent', function (req, res) {
  console.log(">>>>> New Event Via /publishevent <<<<<");
  // console.log("Full Request: "+req);
  // console.log('Request Challenge: '+req.hub_challenge);
  // if (!req.hub_challenge) {
    console.log(`New {Published Event} for {StreamID Here}`)
    console.log(res.body);
    let chanID = "606253185178402836"; //Tecnical Testing Channel
    client.channels.get(chanID).send(res.body);
    //Do something with this information    
  // }
  // else {
    // console.log(`New ${req.hub_mode} Request`)
    res.status(200);
    // res.end(req.hub_challenge);
  // }
});

let server = app.listen(8000, function () {
   let host = server.address().address
   let port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
// Now try to access defined API using URL: http://127.0.0.1:8081/listUsers and HTTP Method : GET on local machine using any REST client. This should produce following result −

// You can change given IP address when you will put the solution in production environment.