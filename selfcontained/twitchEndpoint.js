//This is currently deployed as an Azure Function called 'dacrew - HttpTrigger1'

const Axios = require('axios');
require("dotenv").config();

module.exports = function (context, req) {

  context.log(">>>>> Request Received at /twitchpubsub <<<<<");
  context.log(req.method);

  if (req.method == "GET") {
      context.log(`New ${req.query['hub.mode']} request`);
      //Status defaults to 200
      context.res={
          body:req.query['hub.challenge']
      };
  }
  else{
      context.log(`New Event Published`);
      context.log(req);
      publishEvent(context.res);
  }
  context.log(context.res);
  context.done();
};

const baseURL = "http://104.42.41.254:8080";
const axiosEndpoint = Axios.create({
    baseURL
  });

function publishEvent(responsePkg){
    const Url='/publishevent';
    let body = {
        responsePkg
    };

    axiosEndpoint.post(Url, body)
};