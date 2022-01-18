class Variant {
    constructor(id = null, title = null, sku = null, inventory_quantity = null, weight = null) {

        this.id = id;
        this.title = title;
        this.sku = sku;
        this.available = inventory_quantity > 0;
        this.inventory_quantity = inventory_quantity;
        this.weight = weight;
    }
}

module.exports = Variant;