const productModel = require("../models/productModel");
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).send(products);
  } catch {
    res.status(500).send("Internal Server Error");
  }
};
const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const product = new productModel(data);
    await product.save();
    return res.status(201).send({
      message: "Product Created!",
      product,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};
module.exports = {
  getAllProducts,
  createProduct,
};
