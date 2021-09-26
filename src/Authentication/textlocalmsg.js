const axios = require('axios');
const dotenv = require('dotenv').config({ path: './config/config.env' });

const tlClient = axios.create({
  baseURL: 'https://api.textlocal.in',
  params: {
    apiKey: process.env.TEXTLOCAL_API, //Text local api key
    sender: 'AUTOBX',
  },
});

const smsClient = {
  sendPartnerWelcomeMessage: async (user) => {
    if (user && user.phone && user.name) {
      const params = new URLSearchParams();
      params.append('numbers', [parseInt('91' + user.phone)]);
      //   params.append('message', `Dear ${user.name}, hi`);
      params.append(
        'message',
        `Your OTP is ${user.name}. OTP is confidential for security reasons. Please don't share this OTP with anyone.`
      );

      const msgdata = await tlClient.post('/send', params);
      //console.log(msgdata.data.message);
      return msgdata.data.message;
    }
  },

  sendPaymentLinkMsg: async (user) => {
    if (
      user &&
      user.phone &&
      user.customerName &&
      user.booking_id &&
      user.vehicle_name &&
      user.service_date &&
      user.payable_amount &&
      user.payment_link
    ) {
      const params = new URLSearchParams();
      params.append('numbers', [parseInt('91' + user.phone)]);
      //   params.append('message', `Dear ${user.name}, hi`);
      params.append(
        'message',

        `Dear ${user.customerName}, Your car wash has been done. 
Service Details :
Booking Id : ${user.booking_id}
Vehicle Details : ${user.vehicle_name}
Date : ${user.service_date}
Payable Amount :INR ${user.payable_amount}
Payment Link : ${user.payment_link}

For queries +91 7338073380. 
Team AutoBrix.`
      );

      const msgdata = await tlClient.post('/send', params);
      //console.log(msgdata.data.message);
      return msgdata.data.message;
    }
  },
};

module.exports = smsClient;
