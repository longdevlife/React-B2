import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataShoes: [],
  shoesDetail: {
    sizes: [32, 33, 34, 35],
    id: 1,
    name: "vans black",
    alias: "vans-black-black",
    price: 200,
    description:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    size: "[32,33,34,35]",
    shortDescription:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 100,
    deleted: false,
    categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
    relatedProducts: "[2,3,1]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/vans-black-black.png",
    imgLink: "https://apistore.cybersoft.edu.vn/images/vans-black-black.png",
  },
  cart: [
    {
      sizes: [32, 33, 34, 35],
      id: 1,
      name: "vans black",
      alias: "vans-black-black",
      price: 200,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
      relatedProducts: "[2,3,1]",
      feature: true,
      image: "https://apistore.cybersoft.edu.vn/images/vans-black-black.png",
      imgLink: "https://apistore.cybersoft.edu.vn/images/vans-black-black.png",
      cartQuantity: 1,
    },
  ],
};

const btShoeSlice = createSlice({
  name: "btShoeSlice",

  initialState,

  reducers: {
    setDataShoes: (state, action) => {
      //   console.log("Anh ~ action:", action);
      const payload = action.payload;
      state.dataShoes = payload;
    },

    setShoesDetail: (state, action) => {
      const payload = action.payload;
      console.log("Anh ~ payload:", payload);
      state.shoesDetail = payload;
    },

    setCarts: (state, action) => {
      const payload = action.payload;
      const index = state.cart.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        // Nếu đã có trong giỏ, tăng số lượng
        state.cart[index].cartQuantity += 1;
      } else {
        // Nếu chưa có, thêm mới vào giỏ
        state.cart.push({
          ...payload,
          cartQuantity: 1,
        });
      }
    },

    deleteCart: (state, action) => {
      const id = action.payload;

      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
});

export const btShoeActions = btShoeSlice.actions;

export default btShoeSlice.reducer;
