ga('ec:addImpression', {
  'id': 'offer-t-shirt',
  'name': 'T-Shirt-on-offer',
  'category': 'Merch',
  'list': 'Offer Products Overview',
  'position': 1,
  'dimension1': 'Shirt'  //type
});

ga('ec:setAction', 'click', {
  'list': 'Offer Products Overview'
});



rudderanalytics.track('Product List Viewed', {
  list_id: 'Offer Products Overview',
  category: 'Offer Products Overview',
  products: [
    {
      product_id: 'offer-t-shirt',
      sku: 'sku-3',
      name: 'T-Shirt-on-offer',
      price: 12.99,
      position: 1,
      category: 'Merch',
      typeOfProduct: 'Shirt',
      url: 'https://www.example.com/products/offer-t-shirt',
      image_url: 'https://www.example.com/product/offer-t-shirt.jpg'
    }
  ]
});