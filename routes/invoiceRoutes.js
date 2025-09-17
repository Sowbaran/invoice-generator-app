const express = require("express");
const router = express.Router();
const {getAllInvoices,getInvoice,createInvoice,updateInvoice,deleteInvoice} =  require("../controllers/invoiceController")

router.route("/invoices").get(getAllInvoices).post(createInvoice)
router.route("/invoices/:id").get(getInvoice).patch(updateInvoice).delete(deleteInvoice);



module.exports = router;