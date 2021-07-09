require('dotenv').config();
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const path = require('path');
const port = process.env.PORT || 8060;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/', (req, res)=> {
    res.sendFile(__dirname + "/public/index.html");
});


app.post('/',(req, res)=> {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USERNAME || "DineshMails510@gmail.com",
            pass: process.env.PASSWORD || "password01!"
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: process.env.USERNAME || "DineshMails510@gmail.com",
        subject: `Message from ${req.body.email}: from phone:"${req.body.phone}"`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=> {
        if(error){
            console.log(error);
            res.send("Something went Wrong, Check in Backend");
        }
        else{
            console.log('Email sent' + info); 
            res.send("success");
        }
    });
});


app.listen(port, ()=> {
    console.log(`App is running on port: ${port}`);
});
