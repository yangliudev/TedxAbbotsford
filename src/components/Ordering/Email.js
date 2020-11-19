const nodemailer = require("nodemailer");

function sendEmail(firstName, email) {
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${firstName}</li>
        <li>Email: ${email}</li>
      </ul>
      <h3>Message</h3>
    `;
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      service:'gmail',
      auth: {
        user: "tedxabbotsford@gmail.com", // generated ethereal user
        pass: "C^f8$oB70bOEjg8yr&!WzIVXNScnmcQ^WiSU!ryasUgCqjPxOC", // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Dans La Jardin" <tedxabbotsford@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Thank You For Ordering!", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
}