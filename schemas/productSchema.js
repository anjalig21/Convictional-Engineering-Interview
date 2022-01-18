class Product {
    constructor(code, title = null, vendor = null, bodyHtml = null, 
        variants = null, images = null) {
            
        this.code = code;
        this.title = title;
        this.vendor = vendor;
        this.bodyHtml = bodyHtml;
        this.variants = variants;
        this.images = images;
    }
}

module.exports = Product;
