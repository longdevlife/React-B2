import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { btShoeActions } from "./redux/btshoeSlice";
import { ShoeDetail } from "./ShoeDetail";
import { ShoeCarts } from "./ShoeCart";

export const BTShoe = () => {
  // Lấy data từ redux
  // destructuring
  const { dataShoes } = useSelector((state) => state.btShoeSlice);
  console.log("Hai ~ BTShoe ~ dataShoes:", dataShoes);

  const dispatch = useDispatch();

  // gọi API lấy danh sách shoe
  const getShoes = async () => {
    try {
      const data = await axios.get(
        "https://apistore.cybersoft.edu.vn/api/Product"
      );
      // console.log('Hai ~ getShoes ~ data:', data)
      // dispatch set dataShoes
      dispatch(btShoeActions.setDataShoes(data.data.content));
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    getShoes();
  }, []);

  return (
    <div className="container mx-auto">
      {/* Xem chi tiết sản phầm */}
      <ShoeDetail />

      {/* Carts */}
      <ShoeCarts />

      {/* render UI từ datashoes */}
      <div className="grid grid-cols-4 gap-4">
        {dataShoes.slice(0, 15).map((shoe) => {
          {
            /* shoe card */
          }
          return (
            <div
              key={shoe.id}
              onClick={() => {
                dispatch(btShoeActions.setShoesDetail(shoe));
              }}
            >
              <div>
                <img className="w-full h-full" src={shoe.image} alt="..." />
              </div>
              <p className="mt-3 font-semibold text-xl">{shoe.name}</p>
              <p className="mt-3 font-semibold text-xl">{shoe.price}</p>
              <button
                className="px-4 py-3 bg-black text-white cursor-pointer mt-3"
                onClick={() => {
                  dispatch(btShoeActions.setCarts(shoe));
                }}
              >
                Add Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
