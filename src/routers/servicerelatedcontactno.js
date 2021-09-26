const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.get('/servicerelatedquires/:verticalId', async (req, res) => {
  try {
    const data = {
      service_related: 7411152537,
      payment_related: 8143136214,
    };

    res.status(200).send({
      responseType: 200,
      response: {
        serviceRelated: data.service_related,
        paymentRelated: data.payment_related,
      },
    });
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: { message: error },
    });
  }
});

module.exports = router;
