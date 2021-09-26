const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.get('/employeePostInspection/:employeeId/:bookingid/:leadId', async (req, res) => {
  try {
    const [[row]] = await poolConnection.execute('call ds_employee_service_distance_data(?,?)', [
      req.params.employeeId,
      req.params.bookingid,
    ]);

    if (!row) throw Error;

    const [inspectionData] = await poolConnection.execute('call ds_post_inspection_status_list_wash(?,?)', [
      req.params.leadId,
      req.params.employeeId,
    ]);
    if (!inspectionData) throw Error;
    const [[upcomingService]] = await poolConnection.execute('call ds_employee_next_service_time_wash(?)', [
      req.params.employeeId,
    ]);
    if (!upcomingService) throw Error;

    // const upcomingservicedetails = await upcomingService.map((el) => {
    //   if (el.upcaoming_service_time == undefined) return 0;
    //   el;
    // });

    const upcomingservicedetails = {
      upcomingservicedetails: upcomingService[0].upcomingservice,
      requestservicetimedetails: upcomingService[0].requestservicetime,
      servicedatedetails: upcomingService[0].servicedate,
    };

    res.status(200).send({
      responseType: 200,
      response: {
        serviceData: row,
        inspectionDetails: inspectionData[0],
        upcomingservicetime: upcomingservicedetails.upcomingservicedetails,
        actualservicetime: upcomingservicedetails.requestservicetimedetails,
        actualservicedate: upcomingservicedetails.servicedatedetails,
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
