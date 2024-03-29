import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDropDown } from "../store/dropDownSlice";
import { v4 as uuid } from "uuid";

const DropDown = () => {
  const [dropLabel, setDropLabel] = useState();
  const [dropOptions, setDropOptions] = useState("");
  const dispatch = useDispatch();
  const handleClick = (dropLabel, dropOptions) => {
    dropOptions = dropOptions.split(",");
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);
    dispatch(
      addDropDown({ label: dropLabel, id: small_id, options: dropOptions })
    );
  };
  return (
    <div className="mx-10">
      <div>
        <h6 className="text-sm font-normal tracking-widest text-slate-500 text-center p-2 m-3  border-b-2">
          ADDING DROPDOWN
        </h6>
        <input
          className="shadow appearance-none border rounded w-3/12 py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          placeholder="Enter Label"
          onChange={(e) => setDropLabel(e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-4/12 py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Options( ',' separated)"
          onChange={(e) => setDropOptions(e.target.value)}
        />
        <button
          className="bg-cyan-500 hover:bg-cyan-800 text-white font-bold py-2 px-4 border border-cyan-500 rounded"
          onClick={() => handleClick(dropLabel, dropOptions)}
        >
          Add To Form
        </button>
      </div>
    </div>
  );
};

export default DropDown;
