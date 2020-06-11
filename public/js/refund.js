ga('ec:addProduct', {
  'id': 'product-bacon-jam',
  'name': 'Bacon Jam',
  'category': 'Food/Drink',
  'price': '3.00',
  'quantity': 1
});

ga('ec:setAction', 'refund', {
  'id': localStorage.getItem("transactionId")       // Transaction ID is required for partial refund.
});



rudderanalytics.track('Order Refunded', {
    order_id: 'order_1',
    products: [
      {
      product_id: 'product-bacon-jam',
      quantity: 1
      }
    ]
});