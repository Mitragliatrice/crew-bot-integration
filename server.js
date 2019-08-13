const Axios = require('axios')
require("dotenv").config();

const baseURL = "https://api.twitch.tv/helix";
const axiosEndpoint = Axios.create({
    baseURL,
    headers:{
      'Client-ID': process.env.TWITCH_CLIENT_ID
    }
  });

function getTwitchUserID(username){
  const Url=`/users?login=${username}`
  return axiosEndpoint.get(Url)

  .then(async function (response) {
    let streamerID = response.data.data[0].id;
    let status = await subToStream(streamerID);
    return status;
  })
  .catch(function(error) {
    let status = error.status;
    return status;
  })
}

function subToStream(streamerID){
    const Url='/webhooks/hub'
    let body = {
      "hub.callback":"https://webhook.site/3489a9c9-6aac-4f0c-951f-e80eedb0e5df",
      "hub.mode":"subscribe",
      "hub.topic":`https://api.twitch.tv/helix/streams?user_id=${streamerID}`,
      "hub.lease_seconds":"0"
    };

    return axiosEndpoint.post(Url, body)

    .then(function (response) {
      let status = response.status;
      return status;
    })
    .catch(function({error}) {
      let status = error.status;
      return status;
    })
  };

  module.exports = getTwitchUserID;