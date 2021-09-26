const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();
const textLocal = require('../Authentication/textlocalmsg');

// For Getting  OTP and checking employee details

router.post('/employeeOTP', async (req, res) => {
  try {
    const data = req.body.phone;
    //  console.log(data);
    const [
      rows,
    ] = await poolConnection.execute(
      'select emt.* from employee_master_tbl emt inner join employee_role_assignment_tbl erat on emt.employee_id=erat.employee_id where erat.role_id=1 and erat.is_active=? and emt.is_active=?  and emt.phone_no = ? group by emt.employee_id',
      ['Y', 'Y', data]
    );
    if (!rows) return res.status(404).send('No Employee found');

    const randomNumber = Math.floor(Math.random() * 899999 + 100000);

    poolConnection.query('UPDATE otp_request_tbl SET is_active = ? WHERE phone_no = ?', ['N', data.toString()]);

    const [insertData] = await poolConnection.execute('insert into otp_request_tbl (phone_no,otp_code) values(?,?)', [
      data,
      randomNumber,
    ]);

    // poolConnection.execute;
    const employeeOtpDetails = {
      phone: data,
      name: randomNumber,
    };

    //   console.log(employeeOtpDetails);

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
    //console.error();
    res.status(500).send();
  }
});

// verify OTP

router.post('/EmployeeOTPverification', async (req, res) => {
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

    const [
      employeeDetails,
    ] = await poolConnection.execute(
      'select emt.employee_id,emt.employee_name,emt.employee_code,emt.phone_no,emt.email_id ,ifnull(round(avg(ert.employee_rating),2),0) employee_rating,ifnull(round(sum(errt.review_id),2),0) employee_review,ifnull(obd_device_id,?) obdDeviceId,ifnull(obd_device_name,?)  obdDeviceName,ifnull(password,?)  employeePassword from employee_master_tbl emt left join employee_rating_tbl ert on emt.employee_id=ert.employee_id left join employee_review_tbl errt on errt.employee_id=emt.employee_id and ert.is_active=?  and errt.is_active=? where emt.phone_no = ? and emt.is_active= ?  group by emt.employee_id limit 1',
      ['', '', '', 'Y', 'Y', req.body.phoneNo, 'Y']
    );
    if (employeeDetails.length === 0)
      return res.status(300).send({
        responseType: '300',
        response: { message: 'Invalid phone number' },
      });

    res.status(200).send({
      responseType: '200',
      response: employeeDetails[0] || '',
    });
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: { message: 'Mysql error' },
    });
  }
});

module.exports = router;
