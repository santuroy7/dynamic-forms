import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeText } from "../store/textSlice";
import { removeArea } from "../store/areaSlice";
import { removeDrop } from "../store/dropDownSlice";
import { removeCheck } from "../store/checkSlice";
import { removeRadio } from "../store/radioSlice";

const MainForm = () => {
  const dispatch = useDispatch();
  const textLabel = useSelector((store) => store.textSlice.labels);
  const areaLabel = useSelector((store) => store.areaSlice.labels);
  const dropDownData = useSelector((store) => store.dropDownSlice.dropDown);
  const checkData = useSelector((store) => store.checkSlice.box);
  const radioData = useSelector((store) => store.radioSlice.radio);

  const removeTextInput = (e) => {
    dispatch(removeText(e));
  };

  const removeAreaInput = (e) => {
    dispatch(removeArea(e));
  };

  const removeDropDown = (e) => {
    dispatch(removeDrop(e));
  };
  const removeCheckBox = (e) => {
    dispatch(removeCheck(e));
  };
  const radioRemove = (e) => {
    dispatch(removeRadio(e));
  };
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="">
      <h6 className="text-center border-b-2 m-5 p-2 shadow-lg text-xl font-bold tracking-widest">
        Your Form
      </h6>
      <form onSubmit={submit} className="mx-32 p-5">
        <div className="mt-2">
          {textLabel.map((e, index) => (
            <div key={index}>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {e.label}
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-5/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={e.label}
              />
              <button
                className="bg-indigo-500 mx-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 border border-indigo-700 rounded"
                onClick={() => {
                  removeTextInput(e.id);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="mt-2">
          {areaLabel.map((e) => (
            <div key={e.id}>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {e.label}
              </label>
              <textarea className="resize-y rounded-md shadow appearance-none border w-5/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              <button
                className="bg-indigo-500 mx-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 border border-indigo-700 rounded"
                onClick={() => removeAreaInput(e.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-2">
          {dropDownData.map((e) => (
            <div key={e.id}>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {e.label}
              </label>
              <select className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-5/12 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                {e.options.map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                className="bg-indigo-500 mx-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 border border-indigo-700 rounded"
                onClick={() => removeDropDown(e.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-2">
          {checkData.map((e) => (
            <div key={e.id}>
              <h6 className="block text-gray-700 text-sm font-bold mb-2">
                {e.label}
              </h6>
              {e.options.map((option, index) => (
                <div key={index}>
                  <input type="checkbox" className="accent-indigo-500 mx-2" />
                  <label className="w-5/12 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                    {option}
                  </label>
                </div>
              ))}
              <button
                className="bg-indigo-500 my-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 border border-indigo-700 rounded"
                onClick={() => {
                  removeCheckBox(e.id);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-2">
          {radioData.map((e) => (
            <div key={e.id}>
              <h6 className="block text-gray-700 text-sm font-bold mb-2">
                {e.label}
              </h6>
              {e.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    value={option}
                    className="mx-2 accent-indigo-500 "
                  />
                  <label>{option}</label>
                </div>
              ))}
              <button
                className="bg-indigo-500 my-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 border border-indigo-700 rounded"
                onClick={() => {
                  radioRemove(e.id);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-indigo-500 my-6 hover:bg-indigo-700 text-white font-bold py-2 px-4 border border-indigo-700 rounded"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default MainForm;
