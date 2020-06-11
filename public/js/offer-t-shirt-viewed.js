ga('ec:addProduct', {
  'id': 'offer-t-shirt',
  'name': 'T-Shirt-on-offer',
  'category': 'Merch',
  'price': '12.99',
  'coupon': 'APPARELSALE',
  'quantity': 1
});

ga('ec:setAction', 'detail');


rudderanalytics.track('Product Viewed', {
  product_id: 'offer-t-shirt',
  sku: 'sku-3',
  category: 'Merch',
  name: 'T-Shirt-on-offer',
  brand: 'Levis',
  variant: 'Black',
  price: 12.99,
  quantity: 1,
  currency: 'GBP',
  position: 1,
  value: 12.99,
  coupon: 'APPARELSALE',
  typeOfProduct: 'Shirt',
  url: 'https://www.example.com/product/offer-t-shirt',
  image_url: 'https://www.example.com/product/offer-t-shirt.jpg'
});