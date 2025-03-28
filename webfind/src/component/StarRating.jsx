import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-row items-center space-x-2">
      <p className="text-md font-bold mr-2">Rate:</p>
      <div className="flex space-x-1">
        {Array.from({ length: totalStars }, (_, index) => {
          const starValue = index + 1;
          return (
            <FaStar
              key={index}
              className={`cursor-pointer text-lg transition-all duration-200 ${
                starValue <= (hover || rating) ? "text-yellow-500" : "text-gray-400"
              }`}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
