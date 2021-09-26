const { connection, poolConnection } = require('../db/mysqldb');
const { sendEmail } = require('../emails/sendingmail');
const express = require('express');
const router = new express.Router();

router.get('/sendingmailcarwashreport', async (req, res) => {
  const [row] = await poolConnection.execute(
    'select employee_name,phone_no,email_id from employee_master_tbl where employee_id in(42,43)'
  );

  sendEmail(row[0].email_id, row);
  res.send(row);
});

module.exports = router;
