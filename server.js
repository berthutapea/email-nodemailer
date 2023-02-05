const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contactform.html')
})

app.post('/', (req, res) => {
    console.log(req.body);

    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: '',
    //         pass: ''
    //     }
    // })

    // const transporter = nodemailer.createTransport({
    //     host: '',
    //     port: 587,
    //     // secure: true,
    //     auth: {
    //         user: '',
    //         pass: ''
    //     }
    // })

    const mailOptions = {
        from: req.body.email,
        to: '',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})