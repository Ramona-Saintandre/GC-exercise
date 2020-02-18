// server.js
// "use strict";
// const http = require("http");
// http.createServer((req, res) => {
// res.writeHead(200, {"Content-type": "text/plain"});
// res.write("This is Ramona's first Node server");
// res.end();
// }).listen(8888);

// let monaFacts =['crazy','tired','german','grandma','old']
//  document.write(monaFacts);   
import express from 'express';

const app = express();

const port = 3000;

app.listen(port, () =>{
    console.log('listening on htttp://lochost:${port}')
})

//get random fact

//get all the facts

//
