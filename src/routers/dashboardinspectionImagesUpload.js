const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.post('/dashboardinsepectionImagesUpload', async (req, res) => {
  try {
    const insertData = {
      user_id: req.body.userId,
      inspection_id: req.body.inspectionId,
      images: req.body.images,
      employee_id: req.body.employeeId,
      vehicel_id: req.body.vehiceleId,
      recent_post_id: req.body.recentPostId,
    };

    insertData.images.forEach(async (el) => {
      await poolConnection.query(
        'insert into dashboard_car_wash_post_inspection_service_status(user_id,inspection_id,images,employee_id,image_name,image_id,vehicel_id,recent_post_id) values(?,?,?,?,?,?,?,?)',
        [
          insertData.user_id,
          insertData.inspection_id,
          el.image,
          insertData.employee_id,
          el.imageName,
          el.imageId,
          insertData.vehicel_id,
          insertData.recent_post_id,
        ]
      );
    });

    res.status(200).send({
      responseType: '200',
      response: 'Data Successfully inserted',
    });
  } catch (error) {
    res.status(200).send({
      responseType: '400',
      response: error,
    });
  }
});

module.exports = router;
