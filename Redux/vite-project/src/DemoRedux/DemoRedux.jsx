import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleUpNumberAction } from "./redux/numberSlice";

const DemoRedux = () => {
  let numberState = useSelector((state) => state.numberSlice);
  // useSelector là hook dùng để lấy dữ liệu từ redux về
  console.log("numberState", numberState);

  let dispatch = useDispatch(); // đẩy action lên store (redux)
  let handleClickUp = () => {
    let action = handleUpNumberAction(); // tạo action từ action creator
    dispatch(action); // đẩy action lên store
  };

  return (
    <div>
      <h2>Redux Number: {numberState.number}</h2>
      <button onClick={handleClickUp}>Tăng số</button>
    </div>
  );
};

export default DemoRedux;
