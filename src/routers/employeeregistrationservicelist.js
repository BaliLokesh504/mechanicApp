const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.get('/employeeregistationservicelist', async (req, res) => {
  try {
    const [
      row,
    ] = await poolConnection.execute(
      'select ab_service_id,service_name from ab_services_master where is_registration=?',
      ['Y']
    );
    res.status(200).send({
      responseType: '200',
      response: row,
    });
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: { message: error },
    });
  }
});

module.exports = router;
