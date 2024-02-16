import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addCheck } from "../store/checkSlice";

// import { addCheckBox } from "../store/checkBoxSlice";
const CheckBox = () => {
  const [checkBoxLabel, setCheckBoxLabel] = useState();
  const [checkBoxOptions, setCheckBoxOptions] = useState("");
  const dispatch = useDispatch();
  const handleClick = (checkBoxLabel, checkBoxOptions) => {
    checkBoxOptions = checkBoxOptions.split(",");
    console.log(checkBoxOptions, checkBoxLabel);
    dispatch(addCheck({ label: checkBoxLabel, options: checkBoxOptions }));
  };

  return (
    <>
      <div>
        <input
          placeholder="Enter Label"
          onChange={(e) => setCheckBoxLabel(e.target.value)}
        />
        <input
          placeholder="Enter options( ',' separated)"
          onChange={(e) => setCheckBoxOptions(e.target.value)}
        />
        <button onClick={() => handleClick(checkBoxLabel, checkBoxOptions)}>
          Add To Form
        </button>
      </div>
    </>
  );
};

export default CheckBox;
