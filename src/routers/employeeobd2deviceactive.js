const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const app = express();
const router = express.Router();

router.post('/employeedeviceupdateobd2', async (req, res) => {
  try {
    const [data] = await poolConnection.execute(
      'update employee_master_tbl set is_obd_registerd=? where employee_id=?',
      [req.body.isRegisterd, req.body.employeeId]
    );
    if (data.affectedRows) {
      res.status(200).send({
        responseType: '200',
        response: 'Status change done',
      });
    } else {
      res.status(200).send({
        responseType: '200',
        response: 'No employee found',
      });
    }
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: { message: 'Mysql error' },
    });
  }
});

module.exports = router;
