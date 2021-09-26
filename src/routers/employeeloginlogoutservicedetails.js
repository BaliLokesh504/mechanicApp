const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.get('/employeeloginwisedetails/:employeeId/:dateId/:monthId/:yearId', async (req, res) => {
  try {
    const [[row]] = await poolConnection.execute('call ds_employee_login_logout_attendence_details_wash(?,?,?,?)', [
      req.params.employeeId,
      req.params.dateId,
      req.params.monthId,
      req.params.yearId,
    ]);

    res.status(200).send({
      responseType: 200,
      response: {
        serviceList: row,
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
