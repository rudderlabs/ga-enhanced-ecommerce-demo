ga("ec:addPromo", {
  "id": "tshirt-offer",
  "name": "Offer promo",
  "creative": "offer banner",
  "position": "middle slot"
});



rudderanalytics.track('Promotion Viewed', {
  category: 'Promotions',
  label: 'T-shirt promotion viewed',
  promotion_id: 'tshirt-offer',
  creative: 'offer banner',
  name: 'Offer promo',
  position: 'middle slot'
});