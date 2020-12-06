import React from "react";
import catgry from "../catgrys";
import { DetailWrapper } from "../styles";
const FoodDetail = (props) => {
  const catgry = props.catgry;
  return (
    <DetailWrapper>
      <h1>{catgry.name}</h1>
      <img src={catgry.image} alt={catgry.name} />
    </DetailWrapper>
  );
};
export default FoodDetail;
