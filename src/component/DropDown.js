import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDropDown } from "../store/dropDownSlice";

const DropDown = () => {
  const [dropLabel, setDropLabel] = useState();
  const [dropOptions, setDropOptions] = useState("");
  const dispatch = useDispatch();
  const handleClick = (dropLabel, dropOptions) => {
    dropOptions = dropOptions.split(",");
    // console.log(dropOptions);
    // const obj = {
    //   label: dropLabel,
    //   options: dropOptions,
    // };
    // dispatch(addDropDown(obj));
    dispatch(addDropDown({ label: dropLabel, options: dropOptions }));
    // console.log(dropLabel, dropOptions);
  };
  return (
    <>
      <div>
        <input
          placeholder="Enter Label"
          onChange={(e) => setDropLabel(e.target.value)}
        />
        <input
          placeholder="Enter options( ',' separated)"
          onChange={(e) => setDropOptions(e.target.value)}
        />
        <button onClick={() => handleClick(dropLabel, dropOptions)}>
          Add To Form
        </button>
        {/* <button>Remove</button> */}
      </div>
    </>
  );
};

export default DropDown;
