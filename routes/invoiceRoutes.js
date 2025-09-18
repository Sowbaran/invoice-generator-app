const express = require("express");
const router = express.Router();
const {getAllInvoices,getInvoice,createInvoice,updateInvoice,deleteInvoice} =  require("../controllers/invoiceController")
const authMiddleware = require("../middleware/authmiddleware")
router.route("/invoices").get(authMiddleware,getAllInvoices).post(authMiddleware,createInvoice)
router.route("/invoices/:id").get(authMiddleware,getInvoice).patch(authMiddleware,updateInvoice).delete(authMiddleware,deleteInvoice);



module.exports = router;