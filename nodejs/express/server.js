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

const express = require('express');
// app.use(express.json());
// import { randomFacts } from './facts';
const facts = require (',/facts');
const factsArray = facts.randomFacts;


const app = express();

const port = 3000;
// need this anytime you want to get data
app.use(express.data);

app.listen(port, () =>{
    console.log('listening on htttp://lochost:${port}')
})

//get random fact

app.get ('/facts', (req,res) =>{
    res.json('Getting random Fact')
});

//get all the facts

app.get ('/facts-all', (req,res) =>{
    res.json('Getting all random Fact')
});

// add random facts

app.post ('/facts', (req,res) =>{
    const body = req.body;
    console.log(req);   

    factsArray.push(body);

    res.json('Fact success added')

    // randomFacts.push()
});

//updating random facts

app.put ('/facts', (req,res) =>{
    // randonFacts.splice(index, 1, newFact)
    res.json('update random Fact')
});
// delete random facts

app.delete ('/facts', (req,res) =>{
    // randomFActs.
    res.json('Getting random Fact')
});

