var nodemailer = require('nodemailer');

var express = require('express') 

var app = express() 
app.listen(80, function () { console.log('Express app listening on port 80!')}) 

// Create a SMTP transport object
let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "iprceastsys@gmail.com",
            pass: "iprceast123"
        }
    });

console.log('SMTP Configured');

// Message object
let message = {

    // sender info
    from: 'Sender Name <mwitendeg@gmail.com>',

    // Comma separated list of recipients
    to: '"Receiver Name" <mwitendeg@gmail.com>',

    // Subject of the message
    subject: 'Nodemailer is unicode friendly ✔', 

    // plaintext body
    text: 'This the test from iprc east!',

    // HTML body
    html:'<p><b>Hello</b> to myself <img src="cid:note@node"/></p>'+
         '<p>Here\'s a nyan cat for you as an embedded attachment:<br/></p>'
};

console.log('Sending Mail');
transporter.sendMail(message, function(error){
  if(error){
      console.log('Error occured');
      console.log(error.message);
      return;
  }
  console.log('Message sent successfully!');

  // if you don't want to use this transport object anymore, uncomment following line
  //transport.close(); // close the connection pool
});
