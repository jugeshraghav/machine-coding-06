import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaBackward, FaStar } from "react-icons/fa";
import { useData } from "../index";
import { AddReviewModal } from "../components/AddReviewModal";
import "../App.css";

export const RestaurantDetail = () => {
  const navigate = useNavigate();
  const { resId } = useParams();

  const [showModal, setShowModal] = useState(false);

  const {
    state: { restaurants },
  } = useData();

  const currentRestaurant = restaurants?.find(
    ({ id }) => Number(id) === Number(resId)
  );

  return (
    <>
      <AddReviewModal
        show={showModal}
        onClose={() => setShowModal(false)}
        res={currentRestaurant}
      />
      <div className="res-container">
        <div className="res-header">
          <div className="res-details">
            <p className="res-title">{currentRestaurant?.name}</p>
            {/* <p className="res-menu-list">{currentRestaurant?.menu.join(",")}</p> */}
            <p className="res-address">{currentRestaurant?.address}</p>
            <p className="res-rating">
              Average rating: {currentRestaurant?.averageRating}
            </p>
          </div>
          <button className="primary-btn" onClick={() => setShowModal(true)}>
            {" "}
            Add Review
          </button>
        </div>
        <hr></hr>
        <div className="res-review-container">
          <p className="review-heading">Reviews</p>
          {currentRestaurant?.ratings?.map(
            ({ rating, comment, revName, pp }, index) => (
              <div className="review" key={index}>
                <div className="review-header">
                  <div>
                    {" "}
                    <img src={pp} alt={revName}></img>
                    <p>{revName}</p>
                  </div>

                  <p className="rating-container">
                    {rating}
                    <FaStar />
                  </p>
                </div>

                <p className="review-comment">{comment}</p>
                <hr></hr>
              </div>
            )
          )}
        </div>
      </div>
      <FaBackward className="back-to-home-btn" onClick={() => navigate("/")} />
    </>
  );
};
