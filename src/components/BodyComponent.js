import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./ShimmerUI";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const restaurants =
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setAllRestaurants(restaurants);
    setListOfRestaurants(restaurants);
    setLoading(false);
  };

  const onSearchItem = (event) => {
    setSearchTerm(event.target.value);
  };

  const onClickSearch = () => {
    const filtered = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setListOfRestaurants(filtered);
  };

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          value={searchTerm}
          onChange={onSearchItem}
          placeholder="Search..."
        />
        <button className="search-button" onClick={onClickSearch}>
          Search
        </button>
      </div>
      <div className="restaurant-list-container">
        {listOfRestaurants.length > 0 ? (
          listOfRestaurants.map((card, index) => (
            <RestroCard key={index} card={card.info} />
          ))
        ) : (
          <p>No restaurants match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
