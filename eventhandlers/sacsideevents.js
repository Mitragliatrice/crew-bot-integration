require("dotenv").config();
const Discord = require('discord.js')
const client = new Discord.Client()

const channel = client.channels.get(606216523329044502);
const hook = new Discord.WebhookClient('611943909110841356','wUP3G8ygpx5-3Iqd5YuvoMkB9Yfk5kXHhLswMUN6RgCGTmczxKxG7n9p6boCggLduHLq');

function handleEvent(eventData){
  hook.send({
	"embeds": [{
		"color": 6570405,
		"author":{
		  "name":eventData.title,
		  //"url":"{{ChannelUrl}}"
		},
		"description": `** ${eventData.user_name} is now streaming on Twitch**`,
		"fields": [
		  {
			"name": ":video_game: Game",
			"value": eventData.game_id,
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
  .then(console.log)
  .catch(console.log)

}

module.exports = handleEvent;