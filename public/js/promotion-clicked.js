ga("ec:addPromo", {
  "id": "tshirt-offer",
  "name": "Offer promo",
  "creative": "offer banner",
  "position": "middle slot"
});

// Send the promo_click action with an event.
ga('ec:setAction', 'promo_click');


rudderanalytics.track('Promotion Clicked', {
  category: 'Promotions',
  label: 'T-shirt promotion clicked',
  promotion_id: 'tshirt-offer',
  creative: 'offer banner',
  name: 'Offer promo',
  position: 'middle slot'
});