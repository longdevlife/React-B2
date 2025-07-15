import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import btShoeSlice from "./BTShoe/redux/btshoeSlice.js";

let store = configureStore({
  reducer: {
    // them các slice vào đây
    // numberSlice: numberSlice,
    btShoeSlice,
  },
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
