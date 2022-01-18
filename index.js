const axios = require('axios');
const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors());

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get("/products", async (req, res) => {

})

app.get("/products/:productId", async (req, res) => {

})

app.get("/store/inventory", async (req, res) => {

})