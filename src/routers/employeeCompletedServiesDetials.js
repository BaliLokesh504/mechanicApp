const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.get('/employeeCompletedServiceDetails/:employeeId/:bookingid', async (req, res) => {
  try {
    const [[row]] = await poolConnection.execute('call ds_employee_completed_servcie_list_details_wash(?,?)', [
      req.params.employeeId,
      req.params.bookingid,
    ]);
    res.status(200).send({
      responseType: 200,
      response: {
        serviceList: row[0],
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
