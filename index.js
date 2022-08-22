'use strict';
//require the dotenv module
require('dotenv').config();

//bring in the Express module
const express = require('express');

//define the port to use 
const port = process.env.PORT || 3002;

//instantiate express server
const app = express();

//route
app.get('/', (req, res) => {
    res.send('Hello world');
})

//send the user a StarWars character
app.get('/starwars', (req, res) =>{
    res.send({
        characterName: "luke skywalker",
        characterAge: 95,
        light_saber: "green",
        dad: "the bad guy",
        quip: "May the force be with you..."
    })
})


app.get('/starwars/:id', (req, res) => { 
    if (req.paramss.id !== 'leia') {
        res.send(400)
    } else {
        res.send({
            characterName: "leia",
            characterAge: 95,
            light_saber: "blue",
            dad: "vader"
        })
    }
})






//listen on port 3001
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})