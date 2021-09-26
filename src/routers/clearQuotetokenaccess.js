const axios = require('axios');

const express = require('express');
const router = new express.Router();
(async function () {
  const dataDetails = {
    user: {
      email: 'autobr1',
      password: '9g4jf',
    },
  };

  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data: dataDetails,
    url: 'https://server.clearquote.in/auth/users/login',
  };

  const sendGetRequest = async () => {
    try {
      const newData = await axios(options);
      //   console.log(newData.data.user.token);
      return newData.data.user.token;
    } catch (err) {
      // Handle Error Here
      // console.error(err);
    }
  };
  const resultData = await sendGetRequest();
  return resultData;
})();

// var iife = (function () {
//   return 'Immediately Invoked Function Expressions(IIFEs) example ';
// })();
// console.log(iife);

// console.log(quoteData);
// module.exports = {
//   sendGetRequest,
// };
