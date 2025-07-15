import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const ShoeDetail = () => {
  const { shoesDetail } = useSelector((state) => state.btShoeSlice);
  console.log("Shoe Detail:", shoesDetail);

  return (
    <div>
      <h2 className="text-2xl">Shoes Detail</h2>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <img src={shoesDetail.image} alt="" />
        </div>

        <div className="col-span-6 space-y-4">
          <p className="text-xl">{shoesDetail.name}</p>
          <p>Price : {shoesDetail.price}</p>
          <p>Description : {shoesDetail.description}</p>
        </div>
      </div>
    </div>
  );
};
