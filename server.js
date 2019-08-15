const Axios = require('axios');
require("dotenv").config();

const baseURL = "https://api.twitch.tv/helix";
const axiosEndpoint = Axios.create({
    baseURL,
    headers:{
      'Client-ID': process.env.TWITCH_CLIENT_ID
    }
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

  // async function unsubToStream(username){

  //   let twitchUserID = await getTwitchUserID(username);

  //   const Url='/webhooks/hub'
  //   let body = {
  //     "hub.callback":"https://twitchhttp.azurewebsites.net/api/twitchpubsub",
  //     "hub.mode":"unsubscribe",
  //     "hub.topic":`https://api.twitch.tv/helix/streams?user_id=${twitchUserID}`
  //   };
  //   console.log("Unsub preRequest");
  //   return axiosEndpoint.post(Url, body)

  //   .then(function (response) {
  //     console.log("POST Request Sent to Twitch Success");
  //     let status = response.status;
  //     return status;
  //   })
  //   .catch(function({error}) {
  //     console.log("POST Request Sent to Twitch Error");
  //     let status = error.status;
  //   })
  // };






  module.exports = {
    getTwitchUserID,
    subToTopic,
    unsubToTopic
  };