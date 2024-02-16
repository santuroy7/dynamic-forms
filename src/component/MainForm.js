import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeText } from "../store/textSlice";
import { removeArea } from "../store/areaSlice";
import { removeDrop } from "../store/dropDownSlice";

const MainForm = () => {
  const dispatch = useDispatch();
  const textLabel = useSelector((store) => store.textSlice.labels);
  const areaLabel = useSelector((store) => store.areaSlice.label);
  const dropDownData = useSelector((store) => store.dropDownSlice.dropDown);
  // const checkData = useSelector((store) => store.checkSlice.box);
  console.log(textLabel);
  // const checkBoxData = useSelector((store) => store.checkBoxSlice.checkBox);
  // console.log(checkBoxData);
  const removeTextInput = (e) => {
    // console.log(e);
    dispatch(removeText(e));
  };

  const removeAreaInput = (e) => {
    dispatch(removeArea(e));
  };

  const removeDropDown = (e) => {
    dispatch(removeDrop(e));
  };
  return (
    <>
      <form>
        <div>
          {textLabel.map((e, index) => (
            <div key={index}>
              <label>{e.label}</label>
              <input type="text" />
              <button onClick={() => removeTextInput(e.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div>
          {areaLabel.map((e, index) => (
            <div key={index}>
              <label>{e}</label>
              <textarea></textarea>
              <button onClick={() => removeAreaInput(e)}>Remove</button>
            </div>
          ))}
        </div>

        <div>
          {dropDownData.map((e, index) => (
            <div key={index}>
              <label>{e.label}</label>
              <select>
                {e.options.map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
              <button onClick={() => removeDropDown(e.label)}>Remove</button>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default MainForm;
