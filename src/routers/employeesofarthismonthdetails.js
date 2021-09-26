const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.get('/employeethismonthdetails/:employeeId', async (req, res) => {
  try {
    const [[rows]] = await poolConnection.execute('call ds_employee_servies_count_month_wise_wash(?,?,?,?,?)', [
      req.params.employeeId,
      '',
      '',
      'Y',
      'N',
    ]);

    const [[attendenceStatus]] = await poolConnection.execute('call ds_employee_latest_attendence_status(?)', [
      req.params.employeeId,
    ]);
    const attendenceStatusData = await attendenceStatus.map((el) => {
      return el;
    });

    res.status(200).send({
      responseType: 200,
      response: {
        serviceCount: rows[0],
        isLogin: attendenceStatusData[0].islogin,
        attendenceFlowId: attendenceStatusData[0].attendenceflowid,
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
