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
  constructor(renderHookId,shouldRender=true){
    this.hookId = renderHookId;
    if(shouldRender){
    this.render();
    }
  }
   render(){}
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
//this render will replace the parent render , becoz this represents the caller so 
//caller in this above , when override is child , nd its this is considered.
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
  products = [];
  
  constructor(renderHookId){
    super(renderHookId); 
  //  if(product) //no constructor overloading so here by default constuctor will be called with undefined
  this.fetchProducts();
  // super is atlast becoz this data must need to initialized before parent 
  //call
   
  }

  fetchProducts(){
    this.products = [
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
    this.renderProducts();
  }


  renderProducts(){
    for (const prod of this.products) {
      console.log(prod);
      new ProductItem(prod,'prod-list');
     // prodList.append(prodEl);
     
    }
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
    if(this.products && this.products.length > 0){
      this.renderProducts();
    }
  // return prodList;
  }
};

class ProductItem extends Component{
  
  constructor(product,renderHookId){
    super(renderHookId,false);  //second approach and first approach in product list class
   
    this.product = product;
    this.render();
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

class Shop {
  constructor(){
    this.render();
  }
  render(){
    this.cart = new ShoppingCart("app");
    const productList = new ProductList("app");
  }
}

class App{
  static cart;
  static init(){
    const shop = new Shop();
    this.cart = shop.cart; //indirectly creates static field
    
  }

  static addProductToCart(product){
    this.cart.addProduct(product);
  }
}

App.init();