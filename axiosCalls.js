const Axios = require('axios')
require("dotenv").config();


function getTwitchToken(scope){
  const Url=`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials&scope=${scope}`
  Axios.post(
    Url,{})

  .then(
    function({data}){
      console.log(data)
      return data.access_token;
    }
)
  .catch(({response}) => console.log(response.data));
}




// When calling for the token in order to make another call, preface the function with async and then use 'let token = await getTwitchToken('');'
