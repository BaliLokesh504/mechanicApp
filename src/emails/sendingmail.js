const sgMail = require('@sendgrid/mail');
const sendGridApiKey = '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';
sgMail.setApiKey(sendGridApiKey);

const sendEmail = (email, name) => {
  sgMail.send({
    to: email, // Change to your recipient
    from: 'lokesh.bali@cleansecar.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: `${name}`,
  });
};

// sendEmail('lokesh.bali@cleansecar.com', `and easy to do anywhere, even with Node.js `);
module.exports = {
  sendEmail,
};
