import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addText } from "../store/textSlice";
import { v4 as uuid } from "uuid";
const TextInput = () => {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState();
  //   console.log(textValue);
  // const id = useId();

  // const unique_id = uuid();
  // Get first 8 characters using slice
  // const small_id = unique_id.slice(0, 8);

  const handleClick = (textValue) => {
    const unique_id = uuid();
    // Get first 8 characters using slice
    const small_id = unique_id.slice(0, 8);
    // console.log(textValue);
    dispatch(addText({ id: small_id, label: textValue }));
  };
  return (
    <div className="mx-10">
      <div>
        <h6 className="text-sm font-normal tracking-widest text-slate-500 text-center p-2 m-3  border-b-2">
          ADDING TEXTINPUT
        </h6>
        <input
          placeholder="Enter Label"
          className="shadow appearance-none border rounded w-5/12 py-2 px-3 m-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button
          className="bg-cyan-500 hover:bg-cyan-800 text-white font-bold py-2 px-4 border border-cyan-500 rounded"
          onClick={() => handleClick(textValue)}
        >
          Add To Form
        </button>
        {/* <button>Remove</button> */}
      </div>
    </div>
  );
};

export default TextInput;
