let express = require('express'),
app = express();

app.post('/streamstatus', function (req, res) {
  res.status(200);
  res.send(JSON.stringify({ Message:'Here lies my first endpoint response.'}));
  // res.send(JSON.stringify({ Hello: ‘World’}));
	res.end();
   });

let server = app.listen(8888, function () {
   let host = server.address().address,
   port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
// Now try to access defined API using URL: http://127.0.0.1:8081/listUsers and HTTP Method : GET on local machine using any REST client. This should produce following result −

// You can change given IP address when you will put the solution in production environment.