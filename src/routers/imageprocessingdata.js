const { connection, poolConnection } = require('../db/mysqldb');
const authMiddleware = require('../Middleware/auth');

const express = require('express');
const router = new express.Router();

router.post('/autobrix/api/image/processing/wash', authMiddleware, async (req, res) => {
  try {
    // if (
    //   req.headers['authorization'] ==
    //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTA0LCJpYXQiOjE2MDg2NDY1MjgsImV4cCI6MTY0MDE4MjUyOH0.rQWVtKOhfCKipbbfdAxUVe68Fp8IYgvUXN9-k_4TOrw'
    // ) {
    const [row] = await poolConnection.execute('update obd2_device_master_data set obd2_data=? where quote_id=?', [
      req.body,
      req.body.quoteId,
    ]);
    if (!row == 0)
      res.status(200).send({
        responseType: '200',
        response: 'success',
      });
    // }
    // else {
    //   // console.log('not found');
    //   res.status(200).send({
    //     responseType: '400',
    //     message: 'Validation error',
    //     errors: ['Autonticaton error', 'Invalid data'],
    //   });
    // }
  } catch (error) {
    res.status(200).send({
      responseType: '400',
      message: 'Validation error',
      errors: ['Autenticaton error', 'Invalid data'],
    });
  }
});

module.exports = router;
