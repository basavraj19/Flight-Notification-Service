const nodeMailer =require('nodemailer');

const {GMAIL, GMAIL_PASSWORD} =require('./server-config');

const transporter = nodeMailer.createTransport({
    service : 'Gmail',
    auth : {
      user : GMAIL,
      pass : GMAIL_PASSWORD
    }
});

module.exports = {
     transporter
}