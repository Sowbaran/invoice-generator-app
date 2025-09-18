const express = require("express");
const router = express.Router();
const {getAllUsers,getUser,createUser,updateUser,deleteUser,login} =  require("../controllers/userController")




router.route("/users").get(getAllUsers).post(createUser)
router.route("/users/:id").get(getUser).patch(updateUser).delete(deleteUser);

// router.route("/login").post(login)
console.log("✅ userRoutes loaded");



router.post("/login", login);

module.exports = router;