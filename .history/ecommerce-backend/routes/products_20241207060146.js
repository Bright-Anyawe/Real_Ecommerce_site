const express = require("express");
const Product = require("../models/Product.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { name, description, price, imageUrl, category} = req.body;

     if (!name || !description || !price) {
       return res.status(400).json({ message: "Missing required fields" });
     }
    const product = new Product(req.body)
    // const newProduct = await Product.insertMany(products)
    await products.save();
    res.status(201).json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) return res.status(404).send("Product not found");
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).send("Product not found");
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
