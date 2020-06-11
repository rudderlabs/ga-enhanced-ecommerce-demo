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
