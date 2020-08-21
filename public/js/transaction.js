// Generate a fake transaciton id
generateTransactionId = function () {
  var date = new Date();
  localStorage.setItem("transactionId", date.getMonth().toString() + date.getDate().toString() + date.getHours().toString() + date.getMinutes().toString());
  return localStorage.getItem("transactionId");
};

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


ga('ec:setAction', 'purchase', {
  'id': generateTransactionId(),
  'affiliation': 'Nerd Burger Store',
  'revenue': '31.98',
  'shipping': '4.00',
  'coupon': 'APPARELSALE'
});


rudderanalytics.track('Order Completed', {
  checkout_id: 'what is checkout id here??',
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
      position: 3,
      value: 12.99,
      coupon: 'APPARELSALE',
      typeOfProduct: 'Shirt',
      url: 'https://www.example.com/product/offer-t-shirt',
      image_url: 'https://www.example.com/product/offer-t-shirt.jpg'
    }
  ]
});