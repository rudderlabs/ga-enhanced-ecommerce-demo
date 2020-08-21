ga('ec:addProduct', {
  'id': 'product-bacon-jam',
  'name': 'Bacon Jam',
  'category': 'Food/Drink',
  'position': 1
});

ga('ec:setAction', 'add');



rudderanalytics.track('Product Added', {
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
  typeOfProduct: 'Jam',
  url: 'https://www.example.com/product/bacon-jam',
  image_url: 'https://www.example.com/product/bacon-jam.jpg'
});