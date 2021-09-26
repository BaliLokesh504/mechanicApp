const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();
const textLocal = require('../Authentication/textlocalmsg');
router.get('/employeeregistarion/:phoneNo', async (req, res) => {
  try {
    const [
      [row],
    ] = await poolConnection.execute(
      'select phone_no from employee_master_tbl where phone_no=? and is_active=? limit 1',
      [req.params.phoneNo, 'Y']
    );
    if (row)
      return res.status(404).send({
        responseType: '300',
        response: { message: 'Employee already exists' },
      });
    const randomNumber = Math.floor(Math.random() * 899999 + 100000);

    const [insertData] = await poolConnection.execute('insert into otp_request_tbl (phone_no,otp_code) values(?,?)', [
      req.params.phoneNo,
      randomNumber,
    ]);
    const employeeOtpDetails = {
      phone: req.params.phoneNo,
      name: randomNumber,
    };

    const textLocalMessage = await textLocal.sendPartnerWelcomeMessage(employeeOtpDetails);
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
      response: { message: error },
    });
  }
});

router.post('/employeeregistrationotpverify', async (req, res) => {
  try {
    const [
      rows,
    ] = await poolConnection.execute('select * from otp_request_tbl where phone_no=? and otp_code=? and is_active=?', [
      req.body.phoneNo,
      req.body.otpCode,
      'Y',
    ]);
    if (rows.length === 0)
      return res.status(401).send({
        responseType: '300',
        response: { message: 'Invalid OTP or phone number' },
      });

    res.status(200).send({
      responseType: '200',
      response: employeeDetails[0] || '',
    });
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: 'success',
    });
  }
});

module.exports = router;
