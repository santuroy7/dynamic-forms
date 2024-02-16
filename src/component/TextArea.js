import React from "react";
import { useDispatch } from "react-redux";
import { addAreaLabel } from "../store/areaSlice";
import { useState } from "react";

const TextArea = () => {
  const dispatch = useDispatch();
  const [areaValue, setAreaValue] = useState();
  const handleClick = (areaValue) => {
    console.log(areaValue);
    dispatch(addAreaLabel(areaValue));
  };
  return (
    <div>
      <div>
        <input
          placeholder="Enter Label"
          onChange={(e) => setAreaValue(e.target.value)}
        />
        <button onClick={() => handleClick(areaValue)}>Add To Form</button>
        {/* <button>Remove</button> */}
      </div>
    </div>
  );
};

export default TextArea;
