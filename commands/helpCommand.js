function helpCommand(arguments, receivedMessage) {
  if (arguments.length > 0) {
      receivedMessage.channel.send("It looks like you might need help with '" + arguments.join().replace(","," ")+"'")
  } else {
      receivedMessage.channel.send("I'm not sure what you need help with. Try `!help [topic]`")
  }
}

module.exports = helpCommand;