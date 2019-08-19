

require("dotenv").config({path: '../.env'});
const Axios = require('axios');

const baseURL = "https://api.twitch.tv/helix";
const axiosEndpoint = Axios.create({
    baseURL,
	headers:{'Client-ID': 'process.env.TWITCH_CLIENT_ID'}
});

function subToTopic(callback, topicRoute, seconds){
  const Url='/webhooks/hub'
  let body = {
    "hub.callback":callback,
    "hub.mode":"subscribe",
    "hub.topic":`${baseURL}/${topicRoute}`,
    "hub.lease_seconds":seconds
  };

  return axiosEndpoint.post(Url, body)
  .then(function (response){
    return response.status;
  })
  .catch(function (error){
	console.log(error);
    return error.status;
  })  
};

function unsubToTopic(callback, topicRoute){
  const Url='/webhooks/hub'
  let body = {
    "hub.callback":callback,
    "hub.mode":"unsubscribe",
    "hub.topic":`${baseURL}/${topicRoute}`,
  };

  return axiosEndpoint.post(Url, body)
  .then(function (response){
    return response.status;
  })
  .catch(function (error){
	console.log(error);
    return error.status;
  })  
};

function getTwitchUserID(username){
  const Url=`/users?login=${username}`
  
  return axiosEndpoint.get(Url)
  .then(function (response) {
    let streamerID = response.data.data[0].id;
    console.log(`The StreamID for www.twitch.tv/${username} is: ${streamerID}`)
    return streamerID;
  })
  .catch(function(error) {
    let status = error.status;
    return status;
  })
};

function getTwitchToken(scope){
  const Url=`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials&scope=${scope}`
  Axios.post(Url,{})

  .then(
    function({data}){
      console.log(data)
      return data.access_token;
    }
)
  .catch(({response}) => console.log(response.data));
};

function getGameInformation(gameID){
  console.log("GameID: "+gameID);
  let clientID = process.env.TWITCH_CLIENT_ID;
  return Axios.get(`https://api.twitch.tv/helix/games?id=${gameID}`,{headers:{'Client-ID': `89tzx9djqxq3iesmqk8up6trn02oor`}})

  .then(
    function(response){
     // console.log(response.data.data[0]);
      return response.data.data[0];
    }
)
  .catch(function(response){
	  //console.log(request)
      console.log("Error: "+response)
});

};

  module.exports = {
    getTwitchUserID,
    subToTopic,
    unsubToTopic,
    getTwitchToken,
    getGameInformation
  };