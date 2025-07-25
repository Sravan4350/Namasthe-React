const cards = [
  {
    "restaurantName": "The Grand Indian Feast",
    "cuisine": "Indian",
    "location": "Jubilee Hills, Hyderabad",
    "avgPricePerPerson": 800,
    "hasVegetarianOptions": true,
    "contact": {
      "phone": "+91-40-12345678",
      "website": "www.grandindianfeast.com"
    },
    "rating": {
      "overall": 4.5,
      "food": 4.8,
      "service": 4.3,
      "ambience": 4.2,
      "totalReviews": 1250,
      "recommendedBy": ["Food Critics Hyderabad", "Local Foodies"]
    },
    "imageUrl": "https://t4.ftcdn.net/jpg/14/39/09/15/240_F_1439091559_7DWTKmxBLDh3gnNd8Apk0SsJmZnooxDh.jpg"
  },
  {
    "restaurantName": "Pasta Paradise",
    "cuisine": "Italian",
    "location": "Banjara Hills, Hyderabad",
    "avgPricePerPerson": 1000,
    "hasVegetarianOptions": true,
    "contact": {
      "phone": "+91-40-98765432",
      "website": "www.pastaparadise.in"
    },
    "rating": {
      "overall": 4.2,
      "food": 4.0,
      "service": 4.5,
      "ambience": 4.3,
      "totalReviews": 890,
      "specialMentions": ["Best Pasta in Town", "Romantic Dinner Spot"]
    },
    "imageUrl": "https://as2.ftcdn.net/v2/jpg/02/84/46/89/1000_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg"
  },
  {
    "restaurantName": "Sushi Haven",
    "cuisine": "Japanese",
    "location": "Gachibowli, Hyderabad",
    "avgPricePerPerson": 1500,
    "hasVegetarianOptions": false,
    "contact": {
      "phone": "+91-40-56781234",
      "website": "www.sushihavenhyd.com"
    },
    "rating": {
      "overall": 4.7,
      "food": 4.9,
      "service": 4.6,
      "ambience": 4.5,
      "totalReviews": 620,
      "googleRating": 4.7,
      "zomatoRating": 4.6
    },
    "imageUrl": "https://t4.ftcdn.net/jpg/13/77/61/45/240_F_1377614574_qIhXtqA39wBCYZAe3ar5Uu6vV6VqR9o8.jpg"
  },
  {
    "restaurantName": "The Spicy Wok",
    "cuisine": "Chinese",
    "location": "Kondapur, Hyderabad",
    "avgPricePerPerson": 700,
    "hasVegetarianOptions": true,
    "contact": {
      "phone": "+91-40-23456789",
      "website": "www.spicywok.com"
    },
    "rating": {
      "overall": 3.9,
      "food": 4.1,
      "service": 3.8,
      "ambience": 3.7,
      "totalReviews": 1500,
      "yelpRating": "3.5 stars"
    },
    "imageUrl": "https://t4.ftcdn.net/jpg/14/79/10/51/240_F_1479105196_uY8cU0QIrQuki9mfSEEOfMzGt5iXanhP.jpg"
  },
  {
    "restaurantName": "Café Brew & Bites",
    "cuisine": "Café/Continental",
    "location": "Secunderabad, Hyderabad",
    "avgPricePerPerson": 500,
    "hasVegetarianOptions": true,
    "contact": {
      "phone": "+91-40-87654321",
      "website": "www.brewandbites.in"
    },
    "rating": {
      "overall": 4.0,
      "food": 3.9,
      "service": 4.2,
      "ambience": 4.1,
      "totalReviews": 980,
      "userRatings": [5, 4, 4, 3, 5, 4]
    },
    "imageUrl": "https://t4.ftcdn.net/jpg/09/46/92/55/240_F_946925592_rUzI0z5y9meU07wX5cHBOnrEjQHg0X65.jpg"
  },
  {
    "restaurantName": "The Continental Plate",
    "cuisine": "Continental",
    "location": "Madhapur, Hyderabad",
    "avgPricePerPerson": 1200,
    "hasVegetarianOptions": true,
    "contact": {
      "phone": "+91-40-34567890",
      "website": "www.continentalplate.com"
    },
    "rating": {
      "overall": 4.4,
      "food": 4.5,
      "service": 4.3,
      "ambience": 4.6,
      "totalReviews": 780,
      "opentableRating": "4.5/5"
    },
    "imageUrl": "https://t4.ftcdn.net/jpg/14/62/74/43/240_F_1462744356_NGLJ4GBkl1cA39sPTl49OSsZH5qJYgLP.jpg"
  },
  {
    "restaurantName": "Authentic Andhra Mess",
    "cuisine": "Andhra (South Indian)",
    "location": "Kothapet, Hyderabad",
    "avgPricePerPerson": 300,
    "hasVegetarianOptions": true,
    "contact": {
      "phone": "+91-40-67890123",
      "website": "N/A"
    },
    "rating": {
      "overall": 4.1,
      "food": 4.3,
      "service": 3.9,
      "ambience": 3.5,
      "totalReviews": 2100,
      "localFavorite": true,
      "spicyMeter": "High"
    },
    "imageUrl": "https://t3.ftcdn.net/jpg/15/40/33/48/240_F_1540334874_RNb3qOzwQQrPjwXMaJP5xgwg1tpusdsI.jpg"
  },
  {
    "restaurantName": "Grill House Steaks",
    "cuisine": "Steakhouse/American",
    "location": "Gachibowli, Hyderabad",
    "avgPricePerPerson": 1800,
    "hasVegetarianOptions": false,
    "contact": {
      "phone": "+91-40-90123456",
      "website": "www.grillhousesteaks.in"
    },
    "rating": {
      "overall": 4.6,
      "food": 4.8,
      "service": 4.5,
      "ambience": 4.4,
      "totalReviews": 550,
      "awards": ["Best Steakhouse 2024"]
    },
    "imageUrl": "https://t3.ftcdn.net/jpg/04/94/29/10/240_F_494291082_sjDg53OZTjEEwXA3p0b0ce8gwMQ5DIiC.jpg"
  },
  {
    "restaurantName": "Mumbai Tiffins",
    "cuisine": "Maharashtrian (Indian)",
    "location": "Begumpet, Hyderabad",
    "avgPricePerPerson": 450,
    "hasVegetarianOptions": true,
    "contact": {
      "phone": "+91-40-11223344",
      "website": "N/A"
    },
    "rating": {
      "overall": 3.8,
      "food": 4.0,
      "service": 3.7,
      "ambience": 3.6,
      "totalReviews": 1100,
      "popularDishes": ["Vada Pav", "Pav Bhaji"],
      "swiggyRating": 3.9
    },
    "imageUrl": "https://t4.ftcdn.net/jpg/03/16/77/65/240_F_316776585_Jp189BdpnztmsVuGbJZ2DcAs5R2q6j8G.jpg"
  },
  {
    "restaurantName": "The Mediterranean Delight",
    "cuisine": "Mediterranean",
    "location": "Kukatpally, Hyderabad",
    "avgPricePerPerson": 950,
    "hasVegetarianOptions": true,
    "contact": {
      "phone": "+91-40-55667788",
      "website": "www.mediterraneandelight.com"
    },
    "rating": {
      "overall": 4.3,
      "food": 4.2,
      "service": 4.4,
      "ambience": 4.3,
      "totalReviews": 700,
      "dineoutRating": 4.3
    },
    "imageUrl": "https://t4.ftcdn.net/jpg/03/94/99/83/240_F_394998333_oUSrAfdOXSJVUFk9RUWMkbhLtIhx1jQf.jpg"
  }
]
export default cards