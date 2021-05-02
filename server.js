// Setup empty JS object to act as endpoint for all routes

projectData = {};
const port = 4444; // Declare a var to save the port inside it 

// Require Express to run server and routes

const express = require("express");
const bodyParser = require("body-parser");

// Start up an instance of app

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

const cors = require("cors");
app.use(cors()); // to make anybody has the access the req from any where

// Initialize the main project folder

app.use(express.static('website'));

// Setup Server

const server = app.listen(port, listening);

//Initialize The GET Rout

app.get("/get", getReqWeather);

//Initialize The POST Rout

app.post("/post", postReqWeather);

// Main Functions 

function listening() {
    console.log("Server Running");
    console.log(`Running On Localhost: ${port}`);
};

function getReqWeather(req, res) {
    res.send(projectData);
};

function postReqWeather(req, res) {
    console.log(req.body);
    newData = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    };
    projectData = newData;
};