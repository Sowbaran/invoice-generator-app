const express = require("express");
const router = express.Router();
const {getAllClients,getClient,createClient,updateClient,deleteClient} =  require("../controllers/clientController")

router.route("/clients").get(getAllClients).post(createClient)
router.route("/clients/:id").get(getClient).patch(updateClient).delete(deleteClient);



module.exports = router;