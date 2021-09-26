const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.get('/employeePreInspection/:employeeId/:bookingid/:leadId', async (req, res) => {
  try {
    const [[row]] = await poolConnection.execute('call ds_employee_service_distance_data(?,?)', [
      req.params.employeeId,
      req.params.bookingid,
    ]);

    const [inspectionData] = await poolConnection.execute('call ds_pre_inspection_status_list_wash(?,?)', [
      req.params.leadId,
      req.params.employeeId,
    ]);

    res.status(200).send({
      responseType: 200,
      response: {
        serviceData: row,
        inspectionDetails: inspectionData[0],
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
