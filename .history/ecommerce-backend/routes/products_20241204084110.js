const express = require("express");
const Product = require("./");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }

  router.post("/", async (req, res) => {
    try {
      const { name, description, price, imageUrl, category, stock } = req.body;
      const newProduct = new Product({
        name,
        description,
        price,
        imageUrl,
        category,
        stock,
      });
      await newProduct.save();
      res.status(201).json(newProduct);
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
});

module.exports = router;