import { FoodCard } from "./FoodCard";

export const Restaurant = ({ restaurant }) => {
  return (
    <>
      <p className="restaurant-heading">Dishes By {restaurant?.name}</p>
      <div className="restaurant-menu">
        {restaurant?.menu?.map((food, index) => (
          <FoodCard key={index} food={food} res={restaurant} />
        ))}
      </div>
    </>
  );
};
