var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
const { join } = require("path");

var transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'militara106@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(express.static(__dirname + "/public"));
app.use(express.static(join(__dirname, "client/build"))).use(cors())
app.use(express.json())
// app.use('/', router)
app.get("*", (req, res) => {
    res.sendFile(join(__dirname + "/client/build/index.html"));
  });
const port = process.env.PORT || 3002
app.listen(port)
console.log("App listening on port " +port);