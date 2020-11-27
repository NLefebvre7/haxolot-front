const express = require('express')
const server = express();

const hostname = '0.0.0.0';
const port = 3001;                        

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

const axios = require('axios')



server.get("/", (req, res) => {
  res.json({ message: "Haxolot FRONT application." });

 
//  axios
//     .get('localhost:3000/schools/all', {
//       headers: {
//         accept: 'application/json',
//         'content-type': 'application/json',
//       },
//     })
//     .then(function(response) {
//       myWorkspace.push(response.data['workspaces']);
//       return myWorkspace;
//     })
//     .catch(function(error) {
//       // handle error
//       console.log(error); 
//     })
//     .then(function() {
//       // always executed
//     });

//   res.render('fullscreen', {
//     workspace: JSON.stringify(myWorkspace),
//   });


});


console.log("app js front");
server.listen(port, hostname);