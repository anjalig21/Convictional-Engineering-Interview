const Error = require("./errorSchema");
const Image = require("./imageSchema");
const Inventory = require("./inventorySchema");
const Product = require("./productSchema");
const Variant = require("./variantSchema");
const Weight = require("./weightSchema");

module.exports = {
    Error: Error,
    Image: Image,
    Inventory: Inventory,
    Product: Product,
    Variant: Variant,
    Weight: Weight
}