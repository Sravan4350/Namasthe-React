const RestroCard = ({ card }) => {
  return (
    <div className="restaurant-container">
      <img className="restro-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/${card.cloudinaryImageId}`} alt={card.restaurantName} />
        <div className="restro-details">
            <h2>{card.name}</h2>
            <p>Cuisine: {card.cuisines[0]}</p>
            <p>Location: {card.locality}</p>
            <p>Avg Price: ₹{card.avgPricePerPerson}</p>
            <p>Rating: {card.avgRating} ⭐</p>
        </div>
    </div>
  );
};
export default RestroCard