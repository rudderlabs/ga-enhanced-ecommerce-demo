ga('set', '&cu', 'GBP');

ga('ec:addProduct', {
  'id': 'product-bacon-jam',
  'name': 'Bacon Jam',
  'category': 'Food/Drink',
  'price': '3.00',
  'quantity': 2
});

ga('ec:addProduct', {
  'id': 'product-t-shirt',
  'name': 'T-Shirt',
  'category': 'Merch',
  'price': '12.99',
  'quantity': 1
});

ga('ec:addProduct', {
  'id': 'offer-t-shirt',
  'name': 'T-Shirt-on-offer',
  'category': 'Merch',
  'price': '12.99',
  'coupon': 'APPARELSALE',
  'quantity': 1
});

ga('ec:setAction','checkout', {
    'step': 1
});


// here viewing the basket is checkout step 1
//breaking it to 3 steps, checkout started, checkout step viewed ??(confused with step 1) and checkout step completed with options
var date = new Date();
localStorage.setItem("rudder_transactionId", date.getMonth().toString() + date.getDate().toString() + date.getHours().toString() + date.getMinutes().toString());
 

rudderanalytics.track('Checkout Started', {
  order_id: '' + localStorage.getItem("rudder_transactionId"),
  value: 31.98,
  revenue: 31.98,
  shipping: 4.00,
  coupon: 'APPARELSALE',
  currency: 'GBP',
  products: [
    {
      product_id: 'product-bacon-jam',
      sku: 'sku-1',
      category: 'Merch',
      name: 'Food/Drink',
      brand: '',
      variant: 'Extra topped',
      price: 3.00,
      quantity: 2,
      currency: 'GBP',
      position: 1,
      value: 6.00,
      typeOfProduct: 'Food',
      url: 'https://www.example.com/product/bacon-jam',
      image_url: 'https://www.example.com/product/bacon-jam.jpg'
    },
    {
      product_id: 'product-t-shirt',
      sku: 'sku-2',
      category: 'Merch',
      name: 'T-Shirt',
      brand: 'Levis',
      variant: 'White',
      price: 12.99,
      quantity: 1,
      currency: 'GBP',
      position: 2,
      value: 12.99,
      typeOfProduct: 'Shirt',
      url: 'https://www.example.com/product/t-shirt',
      image_url: 'https://www.example.com/product/t-shirt.jpg'
    },
    {
      product_id: 'offer-t-shirt',
      sku: 'sku-3',
      category: 'Merch',
      name: 'T-Shirt-on-offer',
      brand: 'Levis',
      variant: 'Black',
      price: 12.99,
      quantity: 1,
      currency: 'GBP',
      value: 12.99,
      coupon: 'APPARELSALE',
      typeOfProduct: 'Shirt',
      url: 'https://www.example.com/product/offer-t-shirt',
      image_url: 'https://www.example.com/product/offer-t-shirt.jpg'
    }
  ]
});

rudderanalytics.track('Checkout Step Viewed', {
  checkout_id: '' + localStorage.getItem("rudder_transactionId"),
  step: 1,
});