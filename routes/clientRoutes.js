const express = require("express");
const router = express.Router();
const {getAllClients,getClient,createClient,updateClient,deleteClient} =  require("../controllers/clientController");
const authMiddleware = require("../middleware/authmiddleware");

router.route("/clients").get(authMiddleware, getAllClients).post(authMiddleware, createClient)
router.route("/clients/:id").get(authMiddleware, getClient).patch(authMiddleware, updateClient).delete(authMiddleware, deleteClient);



module.exports = router;