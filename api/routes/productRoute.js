const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController");

router.get("/get-products", getAllProducts);
router.post("/create-products", createProduct);

module.exports = router;
