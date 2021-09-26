const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.post('/customervehicledetailsupdate', async (req, res) => {
  try {
    const [row] = await poolConnection.execute('call ds_employee_vehicle_update_car_wash(?,?,?,?,?,?)', [
      req.body.user_vehicle_id,
      req.body.fuelType,
      req.body.odometerReading,
      req.body.purchaseYear,
      req.body.insuranceExpiryYear,
      req.body.vehicleNo,
    ]);
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
