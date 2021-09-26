const { connection, poolConnection } = require('../db/mysqldb');
// const employeeAuth = require('../Middleware/employeemiddleware');
const express = require('express');
const router = new express.Router();

// For All services list

router.post('/employeeservicelist', async (req, res) => {
  try {
    if (req.body.isMonth == 'N' && req.body.is_curr_month == 'N' && req.body.is_curr_week == 'N') {
      const [[row]] = await poolConnection.execute('call ds_employee_service_list_curr_wash(?,?,?,?)', [
        req.body.fromDate,
        req.body.toDate,
        req.body.employeeId,
        req.body.isCurrentData,
      ]);

      res.status(200).send({
        responseType: 200,
        response: {
          serviceList: row,
        },
      });
    } else {
      const [[row]] = await poolConnection.execute('call ds_employee_service_list_month_wash(?,?,?,?,?)', [
        req.body.fromDate,
        req.body.toDate,
        req.body.employeeId,
        req.body.is_curr_month,
        req.body.is_curr_week,
      ]);

      res.status(200).send({
        responseType: 200,
        response: {
          serviceList: row,
        },
      });
    }
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: { message: error },
    });
  }
});

// For cancelled services list

router.post('/employeecancelledservicelist', async (req, res) => {
  try {
    if (req.body.isMonth == 'N' && req.body.is_curr_month == 'N' && req.body.is_curr_week == 'N') {
      const [[row]] = await poolConnection.execute('call ds_employee_cancelled_service_list_curr_wash(?,?,?,?)', [
        req.body.fromDate,
        req.body.toDate,
        req.body.employeeId,
        req.body.isCurrentData,
      ]);

      res.status(200).send({
        responseType: 200,
        response: {
          serviceList: row,
        },
      });
    } else {
      const [[row]] = await poolConnection.execute('call ds_employee_cancelled_service_list_month_wash(?,?,?,?,?)', [
        req.body.fromDate,
        req.body.toDate,
        req.body.employeeId,
        req.body.is_curr_month,
        req.body.is_curr_week,
      ]);

      res.status(200).send({
        responseType: 200,
        response: {
          serviceList: row,
        },
      });
    }
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: { message: error },
    });
  }
});

// For Rejected services list

router.post('/employeerejectedservicelist', async (req, res) => {
  try {
    if (req.body.isMonth == 'N' && req.body.is_curr_month == 'N' && req.body.is_curr_week == 'N') {
      const [[row]] = await poolConnection.execute('call ds_employee_rejected_service_list_curr_wash(?,?,?,?)', [
        req.body.fromDate,
        req.body.toDate,
        req.body.employeeId,
        req.body.isCurrentData,
      ]);

      res.status(200).send({
        responseType: 200,
        response: {
          serviceList: row,
        },
      });
    } else {
      const [[row]] = await poolConnection.execute('call ds_employee_rejected_service_list_month_wash(?,?,?,?,?)', [
        req.body.fromDate,
        req.body.toDate,
        req.body.employeeId,
        req.body.is_curr_month,
        req.body.is_curr_week,
      ]);

      res.status(200).send({
        responseType: 200,
        response: {
          serviceList: row,
        },
      });
    }
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: { message: error },
    });
  }
});

// For Completed services list

router.post('/employeecompletedservicelist', async (req, res) => {
  try {
    if (req.body.isMonth == 'N' && req.body.is_curr_month == 'N' && req.body.is_curr_week == 'N') {
      const [[row]] = await poolConnection.execute('call ds_employee_completed_service_list_curr_wash(?,?,?,?)', [
        req.body.fromDate,
        req.body.toDate,
        req.body.employeeId,
        req.body.isCurrentData,
      ]);

      res.status(200).send({
        responseType: 200,
        response: {
          serviceList: row,
        },
      });
    } else {
      const [[row]] = await poolConnection.execute('call ds_employee_completed_service_list_month_wash(?,?,?,?,?)', [
        req.body.fromDate,
        req.body.toDate,
        req.body.employeeId,
        req.body.is_curr_month,
        req.body.is_curr_week,
      ]);

      res.status(200).send({
        responseType: 200,
        response: {
          serviceList: row,
        },
      });
    }
  } catch (error) {
    res.status(500).send({
      responseType: '300',
      response: { message: error },
    });
  }
});

module.exports = router;
