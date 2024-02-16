//execise 8-a
const product = {
  product: 'basketball',
  price: 30
};
console.log(product);

//exercise 8-b
product.price = product.price + 500;
console.log(product);

//exercise 8-c
product['delivery-time']= '3 days';
console.log(product);

//exercise 8-d
function comparePrice(product1Name, product1Price, product2Name, product2Price) {
  if (product1Price < product2Price) {
    console.log(product1Name, product1Price)
  } else {
    console.log(product2Name, product2Price)
  }
};

const product2 = {
  name: 'skate',
  price: 48
};

const product3 = {
  name: 'video-game',
  price: 60
};

comparePrice(product2.name, product2.price, product3.name, product3.price);

//execise 8-e

const amazonProduct = {
  name: 'Shoes',
  price: 100
};

const amazonProduct2 = {
  name: amazonProduct.name,
  price: amazonProduct.price
}

function isSameProduct(product1Name, product1Price, product2Name, product2Price) {
  if(product1Name === product2Name && product1Price ===  product2Price){
    console.log('true');
  } else {
    console.log('false');
  }
};

isSameProduct(amazonProduct.name, amazonProduct.price, amazonProduct2.name, amazonProduct2.price);

//exercise 8-f
console.log('Good Morning'.toLowerCase());


//exercise 8-g
const sayHi = 'Hi ';
console.log(sayHi.repeat(3));
console.log('hello '.repeat(3));