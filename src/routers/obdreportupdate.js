const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.post('/obddevicereportupdate', async (req, res) => {
  try {
    const [
      row,
    ] = await poolConnection.execute(
      'update car_spa_vehicle_service_status_tbl set obd_report=?, obd_score=? where id=?',
      [req.body.obdReport, req.body.obdScore, req.body.leadId]
    );
    res.status(200).send({
      responseType: '200',
      response: 'Status change done',
    });
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: { message: error },
    });
  }
});

module.exports = router;
