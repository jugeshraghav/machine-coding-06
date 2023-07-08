import { useNavigate } from "react-router-dom";
import "../App.css";
export const FoodCard = ({ food, res }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="food-card-container"
        onClick={() => navigate(`/restaurant/${res?.id}`)}
      >
        <img src={food?.imgSrc} alt={food?.name} />
        <div className="food-card-content">
          <p className="food-name">{food?.name}</p>
          <p className="food-price">{food?.price}</p>
          <p className="food-restaurant">{res?.name}</p>
        </div>
      </div>
    </>
  );
};
