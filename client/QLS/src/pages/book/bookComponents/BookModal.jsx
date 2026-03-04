
import Modal from "../../../components/common/Modal/Modal"
import Rating from "@mui/material/Rating";
import { useState } from "react";

function BookModal({currentState,onClose}) {
  const [currentRating,setCurrentRating] = useState({
    ratingValue : 0,
    ratingComment : ""
  })

  const handleRatingChange = (event, newValue) => {
    setCurrentRating(prev => ({
      ...prev,
      ratingValue: newValue || 0
    }));
  };

  const handleCommentChange = (e) => {
    setCurrentRating(prev => ({
      ...prev,
      ratingComment: e.target.value
    }));
  };

  const handleSubmit = ()=>{
    console.log(currentRating)
  }

  return (
    <>
      <Modal
        isDisplay={currentState}
        title="Đánh giá sản phẩm"
        onClose={onClose}
      >
        <div className="flex flex-col items-center w-full">
          <Rating
            className="mb-4"
            value={currentRating.ratingValue}
            size="large"
            onChange={handleRatingChange}
            precision={0.5}
          />
          {/* Textarea nhận xét */}
          <textarea
            className="w-full h-50 border-2 border-gray-300 rounded-xl p-3 
               focus:border-green-500 focus:ring-1 focus:ring-green-500 
               outline-none transition resize-none mb-4"
            placeholder="Nhập nhận xét của bạn về sản phẩm"
            value={currentRating.ratingComment}
            onChange={handleCommentChange}
          />
          {/* Nút gửi */}
          <button
            className="w-full md:w-auto px-8 py-3 bg-green-600 text-white 
               font-semibold rounded-xl hover:bg-green-700 
               transition duration-200 shadow-md hover:shadow-lg hover:cursor-pointer"
            onClick={handleSubmit}
          >
            Gửi đánh giá
          </button>
        </div>
      </Modal>
    </>
  );
}

export default BookModal;
