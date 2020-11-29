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





// axios.get('https://loripsum.net/api/plaintext', {
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
    var ecoles = [
        { ecoles: 'ecole1', location: "versici"},
        { ecoles: 'ecole2', location: "verslabas"}
    ];
    var tagline = "ceci est une variable unique, juste une phrase";

    res.render('pages/index', {
        ecoles: ecoles,
        tagline: tagline
    }); 
});
  
server.get('/about', function(req, res) {
    console.log("front about");
    // axios.get('http://localhost:3000/users/all')
    axios.get('http://localhost:3000/users/all', {
                  responseType: "application/json"
                })
            .then((response) => {
                console.log(response);
                const tagline = response;

             


        res.render('pages/about', {
            tagline: tagline
        });

            })
        
        
            .catch((error) => {
                console.log(error);
                res.json({
                    message: "Erreur serveur."
                })
            })


   
});

// about page
// server.get('/about', function(req, res) {
//     axios.get('https://loripsum.net/api/plaintext', {
//         responseType: "text"
//     })
//     .then((response) => {

// const data = response.data;
// res.render('pages/about');
// console.log(response.data);
//     })


//     .catch((error) => {
//         // console.log(error);
//         res.json({
//             message: "Erreur serveur."
//         })
//     })





//     res.render('pages/about');
// });



console.log("app js front");
server.listen(port, hostname);