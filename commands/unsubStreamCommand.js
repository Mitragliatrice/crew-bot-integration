const server = require("../server");

async function unsubStreamCommand(arguments, receivedMessage) {
  if (arguments.length > 0) {
      console.log('Arguments: '+arguments);
      // let response = getTwitchUserID(arguments);
      // let twitchUserID = await getTwitchUserID(arguments);


      let status = await server.unsubToStream(arguments);
      console.log('>'+status);
      if (status == 202) {
        receivedMessage.channel.send("Unsubscribed to " + arguments.join().replace(","," ")+"'")
      } else {
        receivedMessage.channel.send("Something went wrong, please try again. Streamer may not exist.")
      }
  } else {
      receivedMessage.channel.send("You need to supply the streamer name after the !unsubstream in order to unsubscribe.")
  }
}

module.exports = unsubStreamCommand;