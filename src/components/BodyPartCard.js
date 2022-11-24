import React from "react";
import Icon from "../assets/icons/gym.png";

const BodyPartCard = () => {
  return (
    <div className="flex flex-col mx-4">
      <img src={Icon} alt="dumbicon" className="w-[40px] h-[40px] mx-auto" />
      <div className="text-center">Body Part</div>
    </div>
  );
};

export default BodyPartCard;
