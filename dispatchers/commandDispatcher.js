const cmd = require("../commands");

function processCommand(receivedMessage) {

  let fullCommand = receivedMessage.content.substr(1), // Remove the leading exclamation mark
  splitCommand = fullCommand.split(" "), // Split the message up in to pieces for each space
  primaryCommand = splitCommand[0], // The first word directly after the exclamation is the command
  arguments = splitCommand.slice(1); // All other words are arguments/parameters/options for the command

  console.log("Command received: " + primaryCommand);
  console.log("Arguments: " + arguments); // There may not be any arguments

  if (primaryCommand == "help") {
      console.log("help me");
      cmd.helpCommand(arguments, receivedMessage)
  } else if (primaryCommand == "multiply") {
      console.log("multiply me");
      cmd.multiplyCommand(arguments, receivedMessage)
  } else {
      receivedMessage.channel.send("I don't understand the command. Try `!help` or `!multiply`");
  }
}


module.exports = processCommand;