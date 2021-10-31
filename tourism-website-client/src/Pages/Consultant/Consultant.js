import React from "react";
import { Link } from "react-router-dom";
import "./Consultant.css";

const Consultant = (props) => {
  console.log(props);
  const { id, name, place, img } = props.consultant;
  return (
    <div className="">
      <div className="display-card">
        <img src={img} alt="" height="200" width="100%" />
        <p>Name: {name}</p>
        <p>{place}</p>
      </div>
    </div>
  );
};

export default Consultant;
