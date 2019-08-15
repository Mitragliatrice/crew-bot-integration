const twitchCalls = require("../calls/twitchCalls");

async function unsubStreamCommand(arguments, receivedMessage) {
  if (arguments.length > 0) 
  {
    let twitchUserID = await twitchCalls.getTwitchUserID(arguments);

    let callback = "https://dacrew.azurewebsites.net/api/twitchpubsub";
    let topicRoute = `streams?user_id=${twitchUserID}`;

    console.log('>>>> Executing "UnsubStream" Command <<<<')
    let status = await twitchCalls.unsubToTopic(callback, topicRoute)

    console.log('UnsubStream Status: '+status)
    if (status == 202) {
      console.log("Sending Message");
      receivedMessage.channel.send("Unsubscribed to " + arguments.join().replace(","," ")+"'")
    } else {
      console.log("Sending Message");
      receivedMessage.channel.send("Something went wrong, please try again. Streamer may not exist.")
    }
  } else {
    console.log("Sending Message");
    receivedMessage.channel.send("You need to supply the streamer name after the !unsubstream in order to unsubscribe.")
  }
}

module.exports = unsubStreamCommand;









// async function unsubToStream(username){

  //   let twitchUserID = await getTwitchUserID(username);

  //   const Url='/webhooks/hub'
  //   let body = {
  //     "hub.callback":"https://twitchhttp.azurewebsites.net/api/twitchpubsub",
  //     "hub.mode":"unsubscribe",
  //     "hub.topic":`https://api.twitch.tv/helix/streams?user_id=${twitchUserID}`
  //   };
  //   console.log("Unsub preRequest");
  //   return axiosEndpoint.post(Url, body)

  //   .then(function (response) {
  //     console.log("POST Request Sent to Twitch Success");
  //     let status = response.status;
  //     return status;
  //   })
  //   .catch(function({error}) {
  //     console.log("POST Request Sent to Twitch Error");
  //     let status = error.status;
  //   })
  // };