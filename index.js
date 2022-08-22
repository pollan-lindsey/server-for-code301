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







//listen on port 3001
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})