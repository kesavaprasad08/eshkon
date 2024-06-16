import { useState } from "react";

const Card = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    padding: "20px",
    border: "1px solid #ccc",
    transition: "background-color 0.3s ease",
    backgroundColor: isHovered ? `${props?.bgColor}` : "white", // Change background color on hover
    color: isHovered ? "white" : "black",
  };
  return (
    <div
      className="card"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>{props?.title}</h2>
      <img src={props?.imgUrl} />
      <div>{props?.description}</div>
    </div>
  );
};

export default Card;
