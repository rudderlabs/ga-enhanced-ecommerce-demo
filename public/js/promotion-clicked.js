ga("ec:addPromo", {
  "id": "tshirt-offer",
  "name": "Offer promo",
  "creative": "offer banner",
  "position": "middle slot"
});

// Send the promo_click action with an event.
ga('ec:setAction', 'promo_click');


rudderanalytics.track('Promotion Viewed', {
  promotion_id: 'tshirt-offer',
  creative: 'offer banner',
  name: 'Offer promo',
  position: 'middle slot'
});