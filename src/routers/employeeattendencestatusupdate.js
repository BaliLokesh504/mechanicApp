const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.post('/attendencesatausupdate', async (req, res) => {
  try {
    const [row] = await poolConnection.query('call ds_employee_attendence_status_update(?,?,?,?,?,?)', [
      req.body.employeeId,
      req.body.isLogin,
      req.body.latitude,
      req.body.longitude,
      req.body.employeeImage,
      req.body.attendenceFlowId,
    ]);

    if (!row) throw Error;
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
