const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.post('/insepectionImagesUpload', async (req, res) => {
  try {
    const insertData = {
      lead_id: req.body.leadId,
      inspection_id: req.body.inspectionId,
      images: req.body.images,
      employee_id: req.body.employeeId,
      is_pre_inspection: req.body.isPreinspection,
    };

    if (insertData.is_pre_inspection == 'Y') {
      insertData.images.forEach(async (el) => {
        await poolConnection.query(
          'insert into car_wash_pre_inspection_service_status(lead_id,inspection_id,images,employee_id,image_name,image_id) values(?,?,?,?,?,?)',
          [insertData.lead_id, insertData.inspection_id, el.image, insertData.employee_id, el.imageName, el.imageId]
        );
      });
    } else {
      insertData.images.forEach(async (el) => {
        await poolConnection.query(
          'insert into car_wash_post_inspection_service_status(lead_id,inspection_id,images,employee_id,image_name,image_id) values(?,?,?,?,?,?)',
          [insertData.lead_id, insertData.inspection_id, el.image, insertData.employee_id, el.imageName, el.imageId]
        );
      });
    }

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
