import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import numberSlice from "./DemoRedux/redux/numberSlice.js";

let store = configureStore({
  reducer: {
    // thjem6 các slice vào đây
    numberSlice: numberSlice,
  },
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
