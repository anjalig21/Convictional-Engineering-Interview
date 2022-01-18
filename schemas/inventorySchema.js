class Inventory {
    constructor(productId = null, variantId = null, stock = null) {
        this.productId = productId;
        this.variantId = variantId;
        this.stock = stock;
    }
}

module.exports = Inventory;