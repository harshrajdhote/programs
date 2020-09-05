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

class ElementAttribute{
  constructor(attrName,attrValue){
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component{
  constructor(renderHookId){
    this.hookId = renderHookId;
  }

  createRootElement(tag,cssClasses,attributes){
    const rootElement = document.createElement(tag);
    if(cssClasses){
      rootElement.className = cssClasses;
    }
    if(attributes && attributes.length > 0)
    {
      for(const attr of attributes){
        rootElement.setAttribute(attr.name,attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;


  }
}


class ShoppingCart extends Component{
  items = [];
  constructor(renderHookId){
    super(renderHookId);
  }
  set cartItems(value){
    this.items = value;
    this.totalOutput.innerHTML = `<h2> Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount(){
    const sum = this.items.reduce((prevValue,curItem)=>{
      return prevValue + curItem.price;
    },0);
    return sum;
  }
  addProduct(product){
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
    //this.render();
  }

  render(){
    
    const cartEl = this.createRootElement('section','cart');
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    
  }
}
class ProductList extends Component{
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
  
  constructor(renderHookId){
  //  if(product) //no constructor overloading so here by default constuctor will be called with undefined
    super(renderHookId);
  }
  
  addProduct(product){
    this.products.push(product);
  }

  render() {
    
    this.createRootElement('ul','product-list', [
      new ElementAttribute('id','prod-list')
    ]);
    //prodList.id = 'prod-list';
    // let i = 0;
    console.log(this.products);
    for (const prod of this.products) {
      console.log(prod);
      const productItem = new ProductItem(prod,'prod-list');
      productItem.render();
     // prodList.append(prodEl);
     
    }
  // return prodList;
  }
};

class ProductItem extends Component{
  
  constructor(product,renderHookId){
    super(renderHookId);
    this.product = product;
  }

  addToCart(){
    console.log("Adding product to car...");
    App.addProductToCart(this.product);
  }

  render(){
    const prodEl = this.createRootElement('li','product-item');
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
      
  }
}

class Shop{
  render(){
    const renderHook = document.getElementById('app');
    this.cart = new ShoppingCart("app");
    this.cart.render();
    const productList = new ProductList("app");
    productList.render();
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