const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.get('/employeeinspectionimageslist', async (req, res) => {
  try {
    const [row] = await poolConnection.execute(
      ' select id,direction_names from inspection_images_directions_master_tbl where is_active=?',

      ['Y']
    );

    res.status(200).send({
      responseType: 200,
      response: {
        serviceData: row,
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
