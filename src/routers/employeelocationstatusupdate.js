const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.post('/employeelocationstatusupdate', async (req, res) => {
  try {
    await poolConnection.query('call ds_employee_stl_status_upload_wash(?,?,?,?,?)', [
      req.body.leadId,
      req.body.employeeId,
      req.body.statusId,
      req.body.latitude,
      req.body.longitude,
    ]);

    res.status(200).send({
      responseType: '200',
      response: 'Status change done',
    });
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: { message: 'Mysql error' },
    });
  }
});

module.exports = router;
