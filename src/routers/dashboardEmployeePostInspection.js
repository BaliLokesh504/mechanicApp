const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.get('/dashboardemployeePostInspection/:userId/:vehicleId/:employeeId', async (req, res) => {
  try {
    const [inspectionData] = await poolConnection.execute('call dashboard_ds_post_inspection_status_list_wash(?,?,?)', [
      req.params.userId,
      req.params.vehicleId,
      req.params.employeeId,
    ]);
    if (!inspectionData) throw Error;

    res.status(200).send({
      responseType: 200,
      response: {
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
