const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.get('/customervehicledetails/:bookingId', async (req, res) => {
  try {
    const [[row]] = await poolConnection.execute('call ds_employee_vehicle_details_add_car_wash(?)', [
      req.params.bookingId,
    ]);

    res.status(200).send({
      responseType: 200,
      response: {
        data: row[0],
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
