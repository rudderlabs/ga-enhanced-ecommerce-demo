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
    'step': 3,
    'option': '3D Secure'
});


analytics.track('Checkout Step Completed', {
  checkout_id: 'order_1',
  step: 2
});

rudderanalytics.track('Checkout Step Viewed', {
  checkout_id: 'order_1',
  step: 3,
});

analytics.track('Checkout Step Completed', {
  checkout_id: 'order_1',
  step: 3,
  paymentMethod: '3D Secure'
});