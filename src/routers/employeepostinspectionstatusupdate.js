const { connection, poolConnection } = require('../db/mysqldb');
const axios = require('axios');
const express = require('express');
const router = new express.Router();

router.post('/employeepostinspectionstatusupdate', async (req, res) => {
  try {
    const [
      [vehicleData],
    ] = await poolConnection.execute(
      'select cmmt.car_body_style car_make,? car_model from ds_car_servce_leads dcsl inner join car_model_master_tbl cmmt on dcsl.model_id=cmmt.model_id inner join car_spa_vehicle_service_status_tbl c on c.lead_id=dcsl.lead_id where c.id=?',
      ['Any Model', req.body.leadId]
    );

    const [[imagesData]] = await poolConnection.execute('call ds_service_wise_all_images_wash(?)', [req.body.leadId]);

    await poolConnection.execute('call ds_employee_post_inspection_status_upload_wash(?,?,?,?)', [
      req.body.leadId,
      req.body.employeeId,
      req.body.latitude,
      req.body.longitude,
    ]);
    res.status(200).send({
      responseType: '200',
      response: 'Data Successfully inserted',
    });

    const clearQuoteData = await (async function () {
      const dataDetails = {
        user: {
          email: 'autobr1',
          password: '9g4jf',
        },
      };

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: dataDetails,
        url: 'https://server.clearquote.in/auth/users/login',
      };

      const sendGetRequest = async () => {
        try {
          const newData = await axios(options);
          //   console.log(newData.data.user.token);
          return newData.data.user.token;
        } catch (err) {
          // Handle Error Here
          // console.error(err);
        }
      };
      const resultData = await sendGetRequest();
      return resultData;
    })();

    const data = {
      dealerCode: 'Autobrix',
      dealer: '5fb7a36255f11a3d6c4784ab',
      source: 'Autobrix',
      paintType: null,
      quoteType: 'lease',
      fleetImageType: 'null',
      vehicle: {
        make: vehicleData.car_make,
        model: vehicleData.car_model,
        licenseplateno: 'KA01 AB1234',
      },
      customer: {
        name: '',
        phone: '',
      },
      quoteRef: 'Test ref',
      imageUrls: [
        {
          url: imagesData[0].front_image,
          name: 'Front Side',
        },
        {
          url: imagesData[0].back_image,
          name: 'back door',
        },
        {
          url: imagesData[0].right_image,
          name: 'right door',
        },
        {
          url: imagesData[0].left_image,
          name: 'left door',
        },
        {
          url: imagesData[0].dashboard_image,
          name: 'dashboard',
        },
      ],
    };

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${clearQuoteData}`,
      },
      data: data,
      url: 'https://server.clearquote.in/api/v3/createquote',
    };

    const sendGetRequest = async () => {
      try {
        const resp = await axios(options).then(function (response) {
          //   console.log(response.data);
          poolConnection.execute(
            'insert into obd2_device_master_data(vehicle_make,vehicle_model,lead_id,vertical_id,quote_id) values(?,?,?,?,?)',
            [vehicleData.car_make, vehicleData.car_model, req.body.leadId, 3, response.data.data.quoteId]
          );
        });
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    sendGetRequest();
  } catch (error) {
    res.status(200).send({
      responseType: '400',
      response: { message: 'Mysql error' },
    });
  }
});

module.exports = router;
