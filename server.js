const Axios = require('axios')
require("dotenv").config();

async function getTwitchUserID(username){
  const Url=`https://api.twitch.tv/helix/users?login=${username}`
  await Axios.get(Url,{
    headers:{
      "Client-ID":process.env.TWITCH_CLIENT_ID,
    }
  })

  .then(async function (response) {
    let streamerID = response.data.data[0].id;
    console.log('UserID: '+response.data.data[0].id);
    let status = await subToStream(streamerID);
    console.log('Return Status: '+status);
    return status;
    
  })
  .catch((error) => console.log("User Doesn't Exist. Error: " + error.response))
}

async function subToStream(streamerID){
    const Url='https://api.twitch.tv/helix/webhooks/hub'

    await Axios({
      method: 'post',
      url: Url,
      headers: {"Client-ID":"89tzx9djqxq3iesmqk8up6trn02oor"},
      data: {
        "hub.callback":"https://webhook.site/d3794531-2fbb-4fe9-9fe7-6d4291301c93",
        "hub.mode":"subscribe",
        "hub.topic":`https://api.twitch.tv/helix/streams?user_id=${streamerID}`,
        "hub.lease_seconds":"0"
      }
    })

    .then(function (response) {
      // console.log(response.data);
      console.log(response.status);
      let status = response.status;
      return status;
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
    })
    .catch(function({error}) {
      console.log(error.data);
      console.log('Headers: '+error.headers);
      console.log('Status: '+error.status);
      let status = error.status;
      return status;
    })
  };

  module.exports = getTwitchUserID;