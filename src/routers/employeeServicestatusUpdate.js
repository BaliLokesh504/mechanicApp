const { connection, poolConnection } = require('../db/mysqldb');
// const employeeMiddleware = require('../Middleware/employeemiddleware');
const express = require('express');
const router = new express.Router();

router.post('/serviceStatusUpdate', async (req, res) => {
  try {
    await poolConnection.execute('call ds_employee_service_status_update(?,?,?,?,?)', [
      req.body.employeeId,
      req.body.leadId,
      req.body.isAccept,
      req.body.statusComment,
      req.body.reasonId,
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

router.get('/serviceStatusRejectList', async (req, res) => {
  try {
    const [
      reasonDetails,
    ] = await poolConnection.execute(
      'select reason_id,reason from lead_service_status_reasons_master where is_active=?',
      ['Y']
    );

    res.status(200).send({
      responseType: 200,
      response: {
        reasonsList: reasonDetails,
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
