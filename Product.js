class Product {
    constructor ( id, category, name, image, price) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.image = image;
        this.price = price;
    }
    log() {
    console.log(`-The product description-
    ${this.name}:
    id: ${this.id}, 
    category - ${this.category},
    ${this.image}
    price - ${this.price}`);
    }
}