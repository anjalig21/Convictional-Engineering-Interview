class Variant {
    constructor(id = null, title = null, sku = null, 
        available = false, inventory_quantity = null, weight = null) {

        this.id = id;
        this.title = title;
        this.sku = sku;
        this.available = available || inventory_quantity > 0;
        this.inventory_quantity = inventory_quantity;
        this.weight = weight;
    }
}

module.exports = Variant;