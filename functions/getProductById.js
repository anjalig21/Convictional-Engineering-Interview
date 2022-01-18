const axios = require("axios");
const { Product, Weight, Inventory, Variant } = require("../schemas/index");

module.exports = async function getProductById(id) {
  const { data } = await axios.get(
    "https://my-json-server.typicode.com/convictional/engineering-interview-api/products"
  );
  let returnObj;
  for (let product of data) {
    if (product["id"] && product["id"] == id) {
        const inventoryArr = [];
        const imageArr = [];
        let variant;
        for (let i = 0; i < product["variants"].length; i++) {
            const variantObj = product['variants'][i];
            const weight = new Weight(variantObj['weight'], variantObj['weight_unit']);
            const inventory = new Inventory(product['id'], variantObj['id'], variantObj['price']['amount']);
            inventoryArr.push(inventory);
            variant = new Variant(variantObj["id"], variantObj["title"], variantObj["sku"], inventoryArr.length, weight);

            for (image of variantObj['images']) {
                const imgObj = variantObj['images'][i];
                const image = new Image(imgObj['src'], variantObj['id'])
                imageArr.push(image);
            } 
        }

      returnObj = new Product(
        product["id"].toString(),
        product["title"],
        product["vendor"],
        product["body_html"],
        variant,
        imageArr
      );
    }
  }

  return returnObj;
};
