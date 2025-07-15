import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { btShoeActions } from "./redux/btshoeSlice";

export const ShoeCarts = () => {
  const { cart } = useSelector((state) => state.btShoeSlice);
  console.log("Hai ~ ShoeCarts ~ carts:", cart);

  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl">Carts</h2>

      <table>
        <thead>
          <tr>
            <th className="px-3">ID</th>
            <th className="px-3">Image</th>
            <th className="px-3">Price</th>
            <th className="px-3">Quantity</th>
            <th className="px-3">Total</th>
            <th className="px-3"></th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td className="px-3">{item.id}</td>
                <td className="px-3">
                  <img className="size-20" src={item.image} alt="..." />
                </td>
                <td>${item.price}</td>
                <td className="space-x-2 px-3">
                  <button className="px-3 py-2 border border-black rounded-sm">
                    -
                  </button>
                  <span>{item.cartQuantity}</span>
                  <button className="px-3 py-2 border border-black rounded-sm">
                    +
                  </button>
                </td>
                <td className="px-3">${item.price * item.cartQuantity}</td>
                <td
                  className="text-red-500 text-2xl font-bold px-3 cursor-pointer"
                  onClick={() => {
                    dispatch(btShoeActions.deleteCart(item.id));
                  }}
                >
                  X
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
