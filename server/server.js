const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./db.js");
const itemModel = require("./Item.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDB();

app.get("/", async (req, res) => {
  try {
    const response = await itemModel.find();
    return res.json({ response });
  } catch (error) {
    console.error("error:", error);
  }
});

app.post("/addProduct", async (req, res) => {
  try {
    console.log("Rreq", req.body);
    const { name, price, description } = req.body;
    const newProduct = new itemModel({ name, price, description });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
  }
});
app.listen(5000, () => {
  console.log("app is runnig");
});
