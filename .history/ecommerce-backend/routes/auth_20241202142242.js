const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
