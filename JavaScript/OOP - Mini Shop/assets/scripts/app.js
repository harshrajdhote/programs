class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}
class ShoppingCart{
  items = [];

  addProduct(product){
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total : \$${1}</h2>`;
    //this.render();
  }

  render(){
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}
class ProductList{
  products = [
    new Product(
      'A Pillow',
      'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet wh ich you might like - or not.',
      89.99
    )
  ];
  
  constructor(product){
    if(product) //no constructor overloading so here by default constuctor will be called with undefined
     this.products.push(product);
  }
  
  addProduct(product){
    this.products.push(product);
  }

  render() {
    
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    // let i = 0;
    console.log(this.products);
    for (const prod of this.products) {
      console.log(prod);
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
     
    }
   return prodList;
  }
};

class ProductItem{
  constructor(product){
    this.product = product;
  }

  addToCart(){
    console.log("Adding product to car...");
    App.addProductToCart(this.product);
  }

  render(){
    const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      const addCartButton = prodEl.querySelector("button");
      addCartButton.addEventListener("click",this.addToCart.bind(this));
      return prodEl;
  }
}

class Shop{
  render(){
    const renderHook = document.getElementById('app');
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();
    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App{
  static cart;
  static init(){
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart; //indirectly creates static field
    
  }

  static addProductToCart(product){
    this.cart.addProduct(product);
  }
}

App.init();