require('dotenv').config()
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: process.env.SMTPHOST,
  port: process.env.SMTPPORT,
  secure: (process.env.SMTPSECURE === 'true'),
  auth: {
    user: process.env.SMTPUSER,
    pass: process.env.SMTPPASSWORD
  }
})

// setup email data with unicode symbols
let mailOptions = {
  from: '"Fred Foo 👻" <foo@example.com>', // sender address
  to: 'calderaro94@gmail.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>' // html body
}

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error)
  }
  console.log('Message sent: %s', info.messageId)
  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
})
