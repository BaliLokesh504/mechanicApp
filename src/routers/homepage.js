const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.post('/DSemployeehomepage', async (req, res) => {
  try {
    const data = {
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      employeeId: req.body.employeeId,
      isMonth: req.body.isMonth,
      isCurrentData: req.body.isCurrentData,
      is_curr_month: req.body.is_curr_month,
      is_curr_week: req.body.is_curr_week,
    };

    if (data.isMonth == 'N' && data.isCurrentData == 'N' && data.is_curr_month == 'N' && data.is_curr_week == 'N') {
      const [[rows]] = await poolConnection.execute('call ds_employee_servies_count_wash(?,?,?)', [
        data.employeeId,
        data.fromDate,
        data.toDate,
      ]);
      const [[currentService]] = await poolConnection.execute('call ds_employee_all_services_list_wash(?)', [
        data.employeeId,
      ]);

      const [[attendenceStatus]] = await poolConnection.execute('call ds_employee_latest_attendence_status(?)', [
        data.employeeId,
      ]);
      const attendenceStatusData = await attendenceStatus.map((el) => {
        return el;
      });
      const [
        employeeRaiting,
      ] = await poolConnection.execute(
        'select round(avg( employee_rating),1) employee_rating from employee_rating_tbl where employee_id=? and is_active=? limit 1',
        [data.employeeId, 'Y']
      );

      const employeeRaitingDetails = await employeeRaiting.map((el) => {
        if (el.length == 0) {
          return 0;
        } else {
          return el;
        }
      });

      const [
        profileImage,
      ] = await poolConnection.execute(
        'select ifnull(image,?) profileImage from employee_master_tbl where employee_id=?',
        ['', data.employeeId]
      );

      // console.log(attendenceStatusData[0]);
      const currentServiceList = [];
      const upcomingServiceList = [];
      const assignedServiceList = [];

      await currentService.forEach((el) => {
        if (el.rowNo == 1 && el.present_status_id !== 1) {
          currentServiceList.push(el);
        } else if (el.present_status_id == 12 && el.rowNo !== 1) {
          upcomingServiceList.push(el);
        } else if (el.present_status_id == 1) {
          assignedServiceList.push(el);
        }
      });

      res.status(200).send({
        responseType: 200,
        response: {
          serviceCount: rows[0],
          currentService: currentServiceList,
          upcomingService: upcomingServiceList,
          assignedService: assignedServiceList,
          isLogin: attendenceStatusData[0].islogin,
          attendenceFlowId: attendenceStatusData[0].attendenceflowid,
          employeeraiting: employeeRaitingDetails[0].employee_rating,
          profilepicimage: profileImage[0].profileImage,
        },
      });
    } else if (
      data.isMonth == 'N' &&
      data.isCurrentData == 'Y' &&
      data.is_curr_month == 'N' &&
      data.is_curr_week == 'N'
    ) {
      const [[rows]] = await poolConnection.execute('call ds_employee_servies_count_curr_date_wash(?)', [
        data.employeeId,
      ]);

      const [[currentService]] = await poolConnection.execute('call ds_employee_all_services_list_wash(?)', [
        data.employeeId,
      ]);

      const [[attendenceStatus]] = await poolConnection.execute('call ds_employee_latest_attendence_status(?)', [
        data.employeeId,
      ]);

      const attendenceStatusData = await attendenceStatus.map((el) => {
        return el;
      });

      const [
        employeeRaiting,
      ] = await poolConnection.execute(
        'select round(avg( employee_rating),1) employee_rating from employee_rating_tbl where employee_id=? and is_active=? limit 1',
        [data.employeeId, 'Y']
      );

      const employeeRaitingDetails = await employeeRaiting.map((el) => {
        if (el.length == 0) {
          return 0;
        } else {
          return el;
        }
      });

      const [
        profileImage,
      ] = await poolConnection.execute(
        'select ifnull(image,?) profileImage from employee_master_tbl where employee_id=?',
        ['', data.employeeId]
      );

      const currentServiceList = [];
      const upcomingServiceList = [];
      const assignedServiceList = [];

      await currentService.forEach((el) => {
        if (el.rowNo == 1 && el.present_status_id !== 1) {
          currentServiceList.push(el);
        } else if (el.present_status_id == 12 && el.rowNo !== 1) {
          upcomingServiceList.push(el);
        } else if (el.present_status_id == 1) {
          assignedServiceList.push(el);
        }
      });

      res.status(200).send({
        responseType: 200,
        response: {
          serviceCount: rows[0],
          currentService: currentServiceList,
          upcomingService: upcomingServiceList,
          assignedService: assignedServiceList,
          isLogin: attendenceStatusData[0].islogin,
          attendenceFlowId: attendenceStatusData[0].attendenceflowid,
          employeeraiting: employeeRaitingDetails[0].employee_rating,
          profilepicimage: profileImage[0].profileImage,
        },
      });
    } else {
      const [[rows]] = await poolConnection.execute('call ds_employee_servies_count_month_wise_wash(?,?,?,?,?)', [
        data.employeeId,
        data.fromDate,
        data.toDate,
        data.is_curr_month,
        data.is_curr_week,
      ]);
      const [[currentService]] = await poolConnection.execute('call ds_employee_all_services_list_wash(?)', [
        data.employeeId,
      ]);

      const [[attendenceStatus]] = await poolConnection.execute('call ds_employee_latest_attendence_status(?)', [
        data.employeeId,
      ]);

      const attendenceStatusData = await attendenceStatus.map((el) => {
        return el;
      });

      const [
        employeeRaiting,
      ] = await poolConnection.execute(
        'select round(avg( employee_rating),1) employee_rating from employee_rating_tbl where employee_id=? and is_active=? limit 1',
        [data.employeeId, 'Y']
      );

      const employeeRaitingDetails = await employeeRaiting.map((el) => {
        if (el.length == 0) {
          return 0;
        } else {
          return el;
        }
      });

      const [
        profileImage,
      ] = await poolConnection.execute(
        'select ifnull(image,?) profileImage from employee_master_tbl where employee_id=?',
        ['', data.employeeId]
      );

      const currentServiceList = [];
      const upcomingServiceList = [];
      const assignedServiceList = [];

      await currentService.forEach((el) => {
        if (el.rowNo == 1 && el.present_status_id !== 1) {
          currentServiceList.push(el);
        } else if (el.present_status_id == 12 && el.rowNo !== 1) {
          upcomingServiceList.push(el);
        } else if (el.present_status_id == 1) {
          assignedServiceList.push(el);
        }
      });

      res.status(200).send({
        responseType: 200,
        response: {
          serviceCount: rows[0],
          currentService: currentServiceList,
          upcomingService: upcomingServiceList,
          assignedService: assignedServiceList,
          isLogin: attendenceStatusData[0].islogin,
          attendenceFlowId: attendenceStatusData[0].attendenceflowid,
          employeeraiting: employeeRaitingDetails[0].employee_rating,
          profilepicimage: profileImage[0].profileImage,
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
