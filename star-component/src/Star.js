import { useState } from "react";
import { FaStar } from "react-icons/fa";
const Star = ({ numberOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
 // onMouseEnter is not working on onMouseMove is working why
  const handleClick = (currentIndex) => {
    console.log("currentIndex", currentIndex);
    console.log("array", [...Array(numberOfStars)]);
    setRating(currentIndex);
  };
  const handleHover = (currentIndex) => {
    console.log("currentIndex", currentIndex);
    setHover(currentIndex);
  };
  const hanldeMouseLeave = () => {
    console.log("here", rating);
    setHover(rating);
  };
  return (
    <div>
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            onClick={() => handleClick(index)}
            onMouseMove={() => handleHover(index)}
            onMouseLeave={hanldeMouseLeave}
            className={index <= (hover || rating) ? "active" : "inactive"}
            height={100}
            width={100}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Star;
