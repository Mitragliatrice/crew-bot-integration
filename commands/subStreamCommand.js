const twitchCalls = require("../calls/twitchCalls");

async function subStreamCommand(arguments, receivedMessage) {
  if (arguments.length > 0) {

    let twitchUserID = await twitchCalls.getTwitchUserID(arguments);

    let callback = "https://twitchhttp.azurewebsites.net/api/twitchpubsub";
    let topicRoute = `streams?user_id=${twitchUserID}`;
    let seconds = "864000";

    console.log('>>>> Executing "SubStream" Command <<<<')
    let status = await twitchCalls.subToTopic(callback, topicRoute, seconds)

    console.log('SubStream Status: '+status)
    if (status == 202) {
      console.log("Sending Message");
      receivedMessage.channel.send("Subscribed to " + arguments.join().replace(","," ")+"'")
    } else {
      console.log("Sending Message");
      receivedMessage.channel.send("Something went wrong, please try again. Streamer may not exist.")
    }
  } else {
  console.log("Sending Message");
  receivedMessage.channel.send("You need to supply the streamer name after the !substream in order to subscribe.")
  }


}

module.exports = subStreamCommand;