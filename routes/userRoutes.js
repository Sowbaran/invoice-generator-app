const express = require("express");
const router = express.Router();
const {getAllUsers,getUser,createUser,updateUser,deleteUser,login} =  require("../controllers/userController")
const authMiddleware = require("../middleware/authmiddleware")




router.route("/users").get(getAllUsers,authMiddleware).post(createUser,authMiddleware)
router.route("/users/:id").get(getUser,authMiddleware).patch(updateUser,authMiddleware).delete(deleteUser,authMiddleware);

// router.route("/login").post(login)
console.log("✅ userRoutes loaded");



router.post("/login", login);

module.exports = router;