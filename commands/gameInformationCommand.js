const twitchCalls = require("../calls/twitchCalls");

async function gameInformationCommand(arguments, receivedMessage) {
  if (arguments.length > 0) {

    let gameData = await twitchCalls.getGameInformation(arguments);
    console.log("Sending Message");

    receivedMessage.channel.send(`${gameData.name}`)

    .then(function(){
      console.log("YAY")
    })
    .catch(function(error){
      console.log(error)
    })


  }else{
    console.log("Failure");
  }
};

module.exports = gameInformationCommand;