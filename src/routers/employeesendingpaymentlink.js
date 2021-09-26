const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();
const textLocal = require('../Authentication/textlocalmsg');

router.post('/employeepaymentlinkmsg', async (req, res) => {
  try {
    const [[row]] = await poolConnection.execute('call ds_employee_payment_link_details_wash(?)', [req.body.bookingid]);
    const paymentdata = {
      customerName: row[0].customer_name,
      booking_id: row[0].lead_id,
      vehicle_name: row[0].car_model,
      service_date: row[0].service_date,
      payable_amount: req.body.payableamount,
      payment_link: req.body.paymentlink,
      phone: row[0].phone_no,
      //   phone: row[0].phone_no,
    };
    // console.log(paymentdata);

    const textLocalMessage = await textLocal.sendPaymentLinkMsg(paymentdata);
    if (!textLocalMessage)
      return res.status(404).send({
        responseType: '300',
        response: { message: 'Invalid phone number' },
      });
    res.status(200).send({
      responseType: '200',
      response: textLocalMessage,
    });
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: { message: 'Mysql error' },
    });
  }
});

module.exports = router;
