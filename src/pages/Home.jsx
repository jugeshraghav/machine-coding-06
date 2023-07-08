//context imports
import { useData } from "../index";

//component imports
import { Restaurant } from "../components/Restaurant";

export const Home = () => {
  const {
    state: { cuisines },
    dispatch,
    filteredRestaurants,
  } = useData();

  //handlers
  const handleSelectCuisine = (cusineId) => {
    dispatch({ type: "SET_SELECTED_CUISINE", payload: cusineId });
  };
  return (
    <>
      <p className="res-app-main-heading">Food Ordering App</p>
      <p className="res-app-sub-heading">Select Your Cuisine</p>
      <div className="cuisine-btn-container">
        {cuisines?.map(({ id, name }) => (
          <button
            className="primary-btn"
            key={id}
            onClick={() => handleSelectCuisine(id)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="restaurant-section">
        {" "}
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants?.map((restaurant) => (
            <Restaurant key={restaurant?.id} restaurant={restaurant} />
          ))
        ) : (
          <p className="">Select some Cuisines </p>
        )}
      </div>
    </>
  );
};
