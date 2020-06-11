ga('ec:addProduct', {
  'id': 'product-t-shirt',
  'name': 'T-Shirt',
  'category': 'Merch'
});

ga('ec:setAction', 'detail');


// Product clicked ideally is on the product linkk clicked
// since here we are not capturing link click, using Product viewed
rudderanalytics.track('Product Viewed', {
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
});
