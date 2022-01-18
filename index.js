const express = require("express");
const app = express();
const cors = require('cors');
const { Error } = require('./schemas/index');
const getAllProducts = require("./functions/getAllProducts");
const getProductById = require("./functions/getProductById");
const getInventory = require("./functions/getInventory")
app.use(cors());

// Imports
const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get("/products", async (req, res) => {
    getAllProducts()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        const error = new Error("Product not found")
        res.status(404).json(error);
    })
})

app.get("/products/:productId", async (req, res) => {
    getProductById(req.params.productId)
    .then((result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            const error = new Error("Invalid ID supplied")
            res.status(400).json(error);
        }
    })
    .catch((err) => {
        console.log(err);
        const error = new Error("Product not found")
        res.status(404).json(error);
    })
})

app.get("/store/inventory", async (req, res) => {
    getInventory()
    .then((result) => {
        res.status(200).json(result);
    })
})