require("dotenv").config();
const callTwitch = require('../calls/twitchCalls')
const Discord = require('discord.js')
const client = new Discord.Client()

const channel = client.channels.get(606216523329044502);
const hook = new Discord.WebhookClient('611943909110841356','wUP3G8ygpx5-3Iqd5YuvoMkB9Yfk5kXHhLswMUN6RgCGTmczxKxG7n9p6boCggLduHLq');

async function handleEvent(eventData){
  
  if(eventData.type == "live"){
  let gameInfo = await callTwitch.getGameInformation(eventData.game_id);
	console.log(gameInfo);
    hook.send("Let's hear </@&606208724457226262> ROAR!"
	,{
	"embeds": [{
		"color": 6570405,
		"author":{
		  "name":eventData.title,
		//  "url":gameInfo.box_art_url
		},
		"description": `** ${eventData.user_name} is now streaming on Twitch**`,
		"fields": [
		  {
			"name": ":video_game: Game",
			"value": gameInfo.name,
			"inline": true
		 },
		 {
			"name": ":eye: Viewers",
			"value": eventData.viewer_count,
			"inline": true
		  }
		],
		"image": {
		  //"url": eventData.thumbnail_url
		},
		"footer": {
		  "text": `http://twitch.tv/${eventData.user_name}`,
		  "icon_url": "https://d1qb2nb5cznatu.cloudfront.net/startups/i/114142-19c0993bf69c468f1350fd422bfad6b2-medium_jpg.jpg?buster=1410211530"
		}
	}]
  })
  }else{
	console.log(eventData.type +"event type not handled")
  }
}

module.exports = handleEvent;