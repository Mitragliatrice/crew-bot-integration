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
      //Do Something Here
  }
  context.log(context.res);
  context.done();
};