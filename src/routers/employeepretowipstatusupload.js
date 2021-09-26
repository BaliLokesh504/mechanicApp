const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.post('/preinspevtiontowipstatusupdate', async (req, res) => {
  try {
    const [row] = await poolConnection.execute('call ds_employee_pre_to_wip_status_upload_wash(?,?,?,?)', [
      req.body.leadId,
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

module.exports = router;
