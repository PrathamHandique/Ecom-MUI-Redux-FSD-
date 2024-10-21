const express = require("express");
const adminLoginController= require("../controllers/adminLoginController");
const router = express.Router();
router.post("/adminLogin",adminLoginController);//admin login
module.exports = router;