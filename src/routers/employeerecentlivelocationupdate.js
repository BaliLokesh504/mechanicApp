const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.post('/employeeactivelivelocationinsert', async (req, res) => {
  try {
    const [row] = await poolConnection.query('insert into executive_live_location(employee_id,lat,lng) values(?,?,?)', [
      req.body.employeeId,
      req.body.latitude,
      req.body.longitude,
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

router.post('/employeeprofilepicupdate', async (req, res) => {
  try {
    const [row] = await poolConnection.query('update employee_master_tbl set image=? where employee_id=?', [
      req.body.profileImage,
      req.body.employeeId,
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
