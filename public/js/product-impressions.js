ga('ec:addImpression', {
  'id': 'product-bacon-jam',
  'name': 'Bacon Jam',
  'category': 'Food/Drink',
  'list': 'Products Overview',
  'position': 1,
  'dimension1': 'Food', //typeOfProduct
});

ga('ec:addImpression', {
  'id': 'product-t-shirt',
  'name': 'T-Shirt',
  'category': 'Merch',
  'list': 'Products Overview',
  'position': 2,
  'dimension1': 'Shirt' //typeOfProduct
});

ga('ec:setAction', 'click', {
  'list': 'Products Overview'
});


rudderanalytics.track('Product List Viewed', {
  list_id: 'Products Overview',
  category: 'Products Overview',
  products: [
    {
      product_id: 'product-bacon-jam',
      sku: 'sku-1',
      name: 'Bacon Jam',
      price: 3.00,
      position: 1,
      category: 'Food/Drink',
      typeOfProduct: 'Food',
      url: 'https://www.example.com/products/bacon-jam',
      image_url: 'https://www.example.com/product/bacon-jam.jpg'
    },
    {
      product_id: 'product-t-shirt',
      sku: 'sku-2',
      name: 'T-Shirt',
      price: 12.99,
      position: 2,
      category: 'Merch',
      typeOfProduct: 'Shirt',
      url: 'https://www.example.com/products/t-Shirt',
      image_url: 'https://www.example.com/product/t-Shirt.jpg'
    }
  ]
});