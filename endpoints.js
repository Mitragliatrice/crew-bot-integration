const Axios = require('axios');
require("dotenv").config();

const baseURL = "http://127.0.0.1:80";
const axiosEndpoint = Axios.create({
    baseURL
  });

module.exports = function (context, req) {

  context.log(">>>>> Request Received at /twitchpubsub <<<<<");
  // context.log(req.method);
  // context.log(req.query['hub.challenge']);

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

function publishEvent(responsePkg){
    const Url='/publishevent'
    let body = {
        responsePkg
    };

    axiosEndpoint.post(Url, body)
};