const axios = require('axios');
const { Inventory, Variant } = require('../schemas/index')

module.exports = async function getInventory(id) {
    const { data } = await axios.get("https://my-json-server.typicode.com/convictional/engineering-interview-api/products");
    inventoryArr = []
    for (let product of data) {
        for (let i = 0; i < product["variants"].length; i++) {
            const variantObj = product["variants"][i];
            const inventory = new Inventory(
              product["id"],
              variantObj["id"],
              variantObj["price"]["amount"]
            );
            inventoryArr.push(inventory);
        }
    }

    return inventoryArr;
}