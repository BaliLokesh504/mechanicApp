const { connection, poolConnection } = require('../db/mysqldb');
const express = require('express');
const router = new express.Router();

router.get('/employeeinvoicepaymentdeatils/:bookingid/:leadId', async (req, res) => {
  try {
    const [[row]] = await poolConnection.execute('call ds_employee_payment_paid_status_customer_wash(?,?)', [
      req.params.bookingid,
      req.params.leadId,
    ]);
    const data = {
      is_paid: row[0].is_paid,
      collect_amout: row[0].collect_amout,
      invoice_amount: row[0].invoice_amount,
      issued_status: row[0].issued_status,
      payment_link_id: row[0].payment_link_id,
      payment_link: row[0].payment_link,
      qr_code_id: row[0].qr_code_id,
      qr_code: row[0].qr_code,
      cash_id: row[0].cash_id,
      inovice_id: row[0].invoiceid,
      carMake: row[0].car_make,
      carModel: row[0].car_model,
      vehicleId: row[0].user_vehicle_id,
      vehicleNo: row[0].vehicle_no,
      idObdRegister: row[0].obdregister,
    };

    res.status(200).send({
      responseType: 200,
      response: {
        isPaid: data.is_paid,
        collectAmout: data.collect_amout,
        invoiceAmount: data.invoice_amount,
        issuedStatus: data.issued_status,
        paymentLinkId: data.payment_link_id,
        paymentlink: data.payment_link,
        qrCodeId: data.qr_code_id,
        qrCode: data.qr_code,
        cashId: data.cash_id,
        invoiceid: data.inovice_id,
        carMake: data.carMake,
        carModel: data.carModel,
        vehicleId: data.vehicleId,
        vehicleNo: data.vehicleNo,
        idObdRegister: data.idObdRegister,
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
