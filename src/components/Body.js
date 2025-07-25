import {  useState } from "react";
const Body = ({ cards }) => {
  const [filteredCards, setFilteredCards] = useState(cards);

  const searchFood = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = cards.filter(card =>
      card.restaurantName.toLowerCase().includes(searchTerm) ||
      card.cuisine.toLowerCase().includes(searchTerm) ||
      card.location.toLowerCase().includes(searchTerm) ||
      card.rating.overall.toString().includes(searchTerm)
    );
    setFilteredCards(filtered);
  };
 
  const RestroCard = ({ card }) => {
    return (
      <div className="restaurant-container">
          <img className="restro-image" src={card.imageUrl} alt={card.restaurantName} />
          <div className="restro-details">
              <h2>{card.restaurantName}</h2>
              <p>Cuisine: {card.cuisine}</p>
              <p>Location: {card.location}</p>
              <p>Avg Price: ₹{card.avgPricePerPerson}</p>
              <p>Rating: {card.rating.overall} ⭐</p>
          </div>
      </div>
    );
  };

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" onChange={searchFood} className="search-bar" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
      <div className="restaurant-list-container">
        {filteredCards.map((card, index) => (
          <RestroCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};
export default Body