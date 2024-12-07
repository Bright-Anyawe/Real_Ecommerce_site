const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const productRoutes = require("./routes/products.js");
const authRoutes = require("./routes/auth.js");
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
let bodyParser = require("body-parser");


console.log(PORT);
console.log(MONGO_URI);

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
