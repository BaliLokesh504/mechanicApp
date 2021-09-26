const jwtToken = require('../Authentication/token');
const express = require('express');
const router = new express.Router();

router.post('/autobix/login/clearquote', async (req, res) => {
  try {
    const data = jwtToken(req.body.partnerName);
    // if (data.length == 0) throw Error;
    res.status(200).send({
      responseType: 200,
      response: {
        partnerName: req.body.partnerName,
        token: data,
      },
    });
    // console.log(data);
  } catch (error) {
    res.status(400).send({
      responseType: '400',
      response: { message: 'Invalid credentials' },
    });
  }
});

module.exports = router;
