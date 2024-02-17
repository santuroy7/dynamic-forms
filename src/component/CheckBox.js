import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addCheck } from "../store/checkSlice";
import { v4 as uuid } from "uuid";

// import { addCheckBox } from "../store/checkBoxSlice";
const CheckBox = () => {
  const [checkBoxLabel, setCheckBoxLabel] = useState();
  const [checkBoxOptions, setCheckBoxOptions] = useState("");
  const dispatch = useDispatch();
  const handleClick = (checkBoxLabel, checkBoxOptions) => {
    checkBoxOptions = checkBoxOptions.split(",");
    const unique_id = uuid();
    // Get first 8 characters using slice
    const small_id = unique_id.slice(0, 8);
    console.log(checkBoxOptions, checkBoxLabel);
    dispatch(
      addCheck({ label: checkBoxLabel, id: small_id, options: checkBoxOptions })
    );
  };

  return (
    <div className="mx-10">
      <div>
        <h6 className="text-sm font-normal tracking-widest text-slate-500 text-center p-2 m-3  border-b-2">
          ADDING CHECKBOX
        </h6>
        <input
          className="shadow appearance-none border rounded w-3/12 py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Label"
          onChange={(e) => setCheckBoxLabel(e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-4/12 py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Options(',' separated)"
          onChange={(e) => setCheckBoxOptions(e.target.value)}
        />
        <button
          className="bg-cyan-500 hover:bg-cyan-800 text-white font-bold py-2 px-4 border border-cyan-500 rounded"
          onClick={() => handleClick(checkBoxLabel, checkBoxOptions)}
        >
          Add To Form
        </button>
      </div>
    </div>
  );
};

export default CheckBox;
