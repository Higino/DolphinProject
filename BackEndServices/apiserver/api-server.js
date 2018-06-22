
'use strict';

const server = require('./app/api-services');

const PORT = process.env.PORT || 9000;

server.api.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

/*
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
*/