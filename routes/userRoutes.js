const express = require("express");
const router = express.Router();
const {getAllUsers,getUser,createUser,updateUser,deleteUser} =  require("../controllers/userController")

router.route("/users").get(getAllUsers).post(createUser)
router.route("/users/:id").get(getUser).patch(updateUser).delete(deleteUser);



module.exports = router;