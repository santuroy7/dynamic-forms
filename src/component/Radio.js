import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addRadio } from "../store/radioSlice";
import { useDispatch } from "react-redux";

const Radio = () => {
  const [radioLabel, setRadioLabel] = useState();
  const [radioOptions, setRadioOptions] = useState("");
  const dispatch = useDispatch();
  const handleClick = (radioLabel, radioOptions) => {
    radioOptions = radioOptions.split(",");
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);
    dispatch(
      addRadio({ label: radioLabel, id: small_id, options: radioOptions })
    );
  };
  return (
    <div className="mx-10">
      <div>
        <h6 className="text-sm font-normal tracking-widest text-slate-500 text-center p-2 m-3  border-b-2">
          ADDING RADIO
        </h6>
        <input
          className="shadow appearance-none border rounded w-3/12 py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Label"
          onChange={(e) => setRadioLabel(e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-4/12 py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Options(',' separated)"
          onChange={(e) => setRadioOptions(e.target.value)}
        />
        <button
          className="bg-cyan-500 hover:bg-cyan-800 text-white font-bold py-2 px-4 border border-cyan-500 rounded"
          onClick={() => handleClick(radioLabel, radioOptions)}
        >
          Add To Form
        </button>
      </div>
    </div>
  );
};

export default Radio;
