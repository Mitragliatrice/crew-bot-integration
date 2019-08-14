const server = require("../server");

async function streamSubCommand(arguments, receivedMessage) {
  if (arguments.length > 0) {
      console.log('Arguments: '+arguments);
      let status = await server.subToStream(arguments)
      console.log('>'+status);
      if (status == 202) {
        receivedMessage.channel.send("Subscribed to " + arguments.join().replace(","," ")+"'")
      } else {
        receivedMessage.channel.send("Something went wrong, please try again. Streamer may not exist.")
      }
  } else {
      receivedMessage.channel.send("You need to supply the streamer name after the !streamsub in order to subscribe.")
  }
}

module.exports = streamSubCommand;