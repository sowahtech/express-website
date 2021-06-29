// importing needed packages
const express = require('express');
const path = require('path');


//creating server
const server = express();

//request handlers

const handleAboutPageRequest = (req, res) => {
    console.log('about page served successfully');
}

const handleContactPageRequest = (req, res) => {
    console.log('contacts page served successfully');
}

const handleServicesPageRequest = (req, res) => {
    console.log('services page served successfully');
}

const handleHomePageRequest = (req, res) => {
    console.log('home page served successfully');
}

//middleware
server.use(express.static(path.join(__dirname, 'public')));



//routes
server.get('/about', handleAboutPageRequest);
server.get('/contact', handleContactPageRequest);
server.get('/services', handleServicesPageRequest);
server.get('/', handleHomePageRequest);


server.listen(3000, () => console.log('server is ready'));