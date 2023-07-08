import { useData } from "../index";

export const Home = () => {
  const {
    state: { cuisines },
    dispatch,
    filteredRestaurants,
  } = useData();

  const handleSelectCuisine = (cusineId) => {
    dispatch({ type: "SET_SELECTED_CUISINE", payload: cusineId });
  };
  return (
    <>
      <p className="res-app-main-heading">Food Ordering App</p>
      <p className="res-app-sub-heading">Select Your Cuisine</p>
      {cuisines?.map(({ id, name }) => (
        <button key={id} onClick={() => handleSelectCuisine(id)}>
          {name}
        </button>
      ))}
      {filteredRestaurants.length > 0 ? (
        filteredRestaurants?.map((restaurant) => (
          <h1 key={restaurant?.id}>He</h1>
        ))
      ) : (
        <p>Select some Cuisines </p>
      )}
    </>
  );
};
