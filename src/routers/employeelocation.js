const { connection, poolConnection } = require('../db/mysqldb');
var map = require('google_directions');
const dotenv = require('dotenv').config({ path: './config/config.env' });

const express = require('express');
const router = new express.Router();

router.post('/employeeLocationDetails', async (req, res) => {
  try {
    const [
      row,
    ] = await poolConnection.execute(
      'select concat(lat,?,lng) latlong from executive_live_location where employee_id=? and is_active=? order by id desc limit 1',
      [',', req.body.employeeId, 'Y']
    );
    if (row.length === 0) throw 'No data found';

    const rowData = Object.values(row[0]);

    const [[customerDetails]] = await poolConnection.execute('call ds_employee_service_distance_data(?,?)', [
      req.body.employeeId,
      req.body.bookingid,
    ]);

    var params = {
      origin: rowData[0],
      destination: req.body.address,
      key: process.env.GOOGLE_DIRECTION_API,
    };

    const emptyData = '';
    // console.log(emptyData);
    await map.getDirections(params, function (err, data) {
      // if (err) {
      //   return err;
      // }

      if (data.routes.length == 0) {
        res.status(200).send({
          responseType: 200,
          response: {
            googleDistance: emptyData,
            googleDuration: '',
            startLocation: '',
            endLocation: '',
            customerDetails: customerDetails[0],
          },
        });
      } else {
        res.status(200).send({
          responseType: 200,
          response: {
            googleDistance: data.routes[0].legs[0].distance.text,
            googleDuration: data.routes[0].legs[0].duration.text,
            startLocation: req.body.address,
            endLocation: data.routes[0].legs[0].start_address,
            customerDetails: customerDetails[0],
          },
        });
      }

      // res.status(300).send({
      //   responseType: '300',
      //   response: { message: 'invalid address or lat longs' },
      // });
    });
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: { message: error },
    });
  }
});

module.exports = {
  router,
};
