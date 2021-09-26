const express = require('express');
const dotenv = require('dotenv').config({ path: './src/config/config.env' });
const fs = require('fs');
const path = require('path');

var morgan = require('morgan');

// Router Connections
//
const employeeOTP = require('../src/routers/employeeOTPlogin');
const employeeHomepage = require('../src/routers/homepage');
const locationData = require('../src/routers/employeelocation');
const employeeServiceDetails = require('../src/routers/employeeServiceList');
const employeeCompletedDetials = require('../src/routers/employeeCompletedServiesDetials');
const employeepreInsepection = require('../src/routers/employeePreInspection');
const serviceStatusChanges = require('../src/routers/employeeServicestatusUpdate');
const preInspectionImagesUpload = require('../src/routers/employeePreInspectionImageUpload');
const startedtolocationpreinspectionsupload = require('../src/routers/employeelocationstatusupdate');
const employeepostInsepection = require('../src/routers/employeePostInspection');
const inspectionimagesdatalist = require('../src/routers/employeeInspectionImagesList');
const preinspectiontowipstatusupdate = require('../src/routers/employeepretowipstatusupload');
const postinspectionstatusupdate = require('../src/routers/employeepostinspectionstatusupdate');
const employeeinvoicepayment = require('../src/routers/employeeinvoicepaymentdetails');
const paymentlinkssendingmsg = require('../src/routers/employeesendingpaymentlink');
const attendenceupdatestatus = require('../src/routers/employeeattendencestatusupdate');
const employeeattendencedetails = require('../src/routers/employeeattendencedetails');
const employeeloginwisedetails = require('../src/routers/employeeloginlogoutservicedetails');
const quiresrelateddetails = require('../src/routers/servicerelatedcontactno');
const employeeprofile = require('../src/routers/employeeprofiledeatils');
const employeecurrentlivelocation = require('../src/routers/employeerecentlivelocationupdate');
const employeecompletdststatusupdate = require('../src/routers/emloyeeservicecompletdstatus');
const sofarthismonthdetails = require('../src/routers/employeesofarthismonthdetails');
const imageprocessingdata = require('../src/routers/imageprocessingdata');
// const emailsendingforcarservice = require('../src/routers/carservicemailreport');
const clearquotelogin = require('../src/routers/clearQuotelogin');
const customervehicledetails = require('../src/routers/customersvehicledetails');
const customervehicledetailsupdate = require('../src/routers/customervehicledetailsupdate');
const obdreportupdate = require('../src/routers/obdreportupdate');
const employeeobd2devicestatus = require('../src/routers/employeeobd2deviceactive');
const dashboardemployeepostInsepection = require('../src/routers/dashboardEmployeePostInspection');
const dashboardinsepectionImagesUpload = require('../src/routers/dashboardinspectionImagesUpload');
const dashboardeimageprocessing = require('../src/routers/dashboardimageprocessing');
// Employee registration form

// const employeeregistrationnumber = require('../src/routers/employeeregistrationnumber');
// const employeeregistrationverticallist = require('../src/routers/employeeregistrationservicelist');

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('common', { stream: accessLogStream }));

app.use(employeeOTP);
app.use(employeeHomepage);
// app.use(locationData);
app.use(employeeServiceDetails);
app.use(employeeCompletedDetials);
app.use(employeepreInsepection);
app.use(serviceStatusChanges);
app.use(preInspectionImagesUpload);
app.use(startedtolocationpreinspectionsupload);
app.use(employeepostInsepection);
app.use(inspectionimagesdatalist);
app.use(preinspectiontowipstatusupdate);
app.use(postinspectionstatusupdate);
app.use(employeeinvoicepayment);
app.use(paymentlinkssendingmsg);
app.use(attendenceupdatestatus);
app.use(employeeattendencedetails);
app.use(employeeloginwisedetails);
app.use(quiresrelateddetails);
app.use(employeeprofile);
app.use(employeecurrentlivelocation);
app.use(employeecompletdststatusupdate);
app.use(sofarthismonthdetails);
app.use(imageprocessingdata);
// app.use(emailsendingforcarservice);
app.use(clearquotelogin);
app.use(customervehicledetails);
app.use(customervehicledetailsupdate);
app.use(obdreportupdate);
app.use(employeeobd2devicestatus);
app.use(dashboardemployeepostInsepection);
app.use(dashboardinsepectionImagesUpload);
app.use(dashboardeimageprocessing);
// registration details

// app.use(employeeregistrationnumber);
// app.use(employeeregistrationverticallist);

app.listen(port, () => {
  console.log('connected to port: ' + port);
});
