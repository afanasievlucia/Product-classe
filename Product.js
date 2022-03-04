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

const apple = new Product('001', 'A', 'Apple-Golden', 'url(image.jpeg)', '10lei/kg');
const orange = new Product('002', 'A', "Orange", 'url(orange.jpg)', '25lei/kg');
const avocado = new Product('003', "A", 'Avocado', 'url(avocado.img)', '75lei/kg');

apple.log();
orange.log();
avocado.log()