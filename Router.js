const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.sendFile(__dirname + "/public/index.html");
});

router.get('/resume', (req, res)=> {
    res.sendFile(__dirname + '/public/Resume/My Resume.html');
});

router.get('/Projects', (req, res)=> {
    res.sendFile(__dirname + "/public/Projects/Projects.html");
});

router.get('/projects/css/Projects.css', (req, res)=> {
    res.sendFile(__dirname + "/public/css/Projects.css");
});

router.get('/projects/img/portfolio/port1.png', (req, res)=>{
    res.sendFile(__dirname + "/public/img/portfolio/port1.png");
});

router.get('/projects/img/portfolio/port2.png', (req, res)=>{
    res.sendFile(__dirname + "/public/img/portfolio/port2.png");
});

router.get('/projects/img/portfolio/port3.png', (req, res)=>{
    res.sendFile(__dirname + "/public/img/portfolio/port3.png");
});

router.get('/projects/img/portfolio/port4.png', (req, res)=>{
    res.sendFile(__dirname + "/public/img/portfolio/port4.png");
});

router.get('/projects/img/portfolio/port5.png', (req, res)=>{
    res.sendFile(__dirname + "/public/img/portfolio/port5.png");
});

router.get('/projects/img/portfolio/port6.png', (req, res)=>{
    res.sendFile(__dirname + "/public/img/portfolio/port6.png");
});

router.get('/projects/img/portfolio/port7.png', (req, res)=>{
    res.sendFile(__dirname + "/public/img/portfolio/port7.png");
});

router.get('/projects/img/portfolio/port8.png', (req, res)=>{
    res.sendFile(__dirname + "/public/img/portfolio/port8.png");
});

router.get('/projects/img/portfolio/port9.png', (req, res)=>{
    res.sendFile(__dirname + "/public/img/portfolio/port9.png");
});

router.get('/projects/img/portfolio/port10.png', (req, res)=>{
    res.sendFile(__dirname + "/public/img/portfolio/port10.png");
});

module.exports = router;

