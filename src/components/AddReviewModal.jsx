import { RxCrossCircled } from "react-icons/rx";
import "../App.css";
import { useState } from "react";
import { useData } from "../contexts/DataContext";
export const AddReviewModal = ({ show, onClose, res }) => {
  const [currentReview, setCurrentReview] = useState({
    rating: 5,
    comment: "",
    revName: "Jugesh",
    pp: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1253547685.1686987260&semt=ais",
  });

  const {
    state: { restaurants },
    dispatch,
  } = useData();

  const currentResId = res?.id;
  const handleAddReview = (currentReview) => {
    const updatedResArr = restaurants?.map((res) =>
      res?.id === currentResId
        ? { ...res, ratings: [...res?.ratings, currentReview] }
        : res
    );
    dispatch({ type: "ADD_REVIEW", payload: updatedResArr });
  };
  return (
    show && (
      <div className="modal-container" onClick={() => onClose()}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <p className="modal-heading">Add your Review</p>

          <div className="modal-input-container">
            <p className="modal-input-text">Rating</p>
            <select
              value={currentReview.rating}
              onChange={(e) =>
                setCurrentReview({ ...currentReview, rating: e.target.value })
              }
            >
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
          </div>
          <div className="modal-input-container">
            <p className="modal-input-text">Comment</p>
            <textarea
              type="text"
              placeholder="comment "
              rows="5"
              onChange={(e) =>
                setCurrentReview({ ...currentReview, comment: e.target.value })
              }
            ></textarea>
          </div>
          <RxCrossCircled
            className="close-modal-btn"
            onClick={() => onClose()}
          />
          <button
            className="secondary-btn"
            onClick={() => {
              handleAddReview(currentReview);
              onClose();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    )
  );
};
