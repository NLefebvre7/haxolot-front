const express = require('express')
const server = express();

const hostname = '0.0.0.0';
const port = 3001;                        

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

const axios = require('axios')


server.set('view engine', 'ejs');



// server.get("/", (req, res) => {
//   //res.json({ message: "Haxolot FRONT application." });
// const axios = require('axios');

// const baseUrl = "https://loripsum.net/api";



// axios.get(baseUrl + '/plaintext', {
//             responseType: "text"
//         })
//         .then((response) => {
//  const data = response.data;
//         res.send( data );
// console.log(response.data);
//         })


//         .catch((error) => {
//             // console.log(error);
//             res.json({
//                 message: "Erreur serveur."
//             })
//         })



// });

server.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
server.get('/about', function(req, res) {
    res.render('pages/about');
});





console.log("app js front");
server.listen(port, hostname);