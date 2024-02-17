import React from "react";
import "../css/Element.css";
import { useState } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
// import Dropdown from "./Dropdown";
import DropDown from "./DropDown";
import CheckBox from "./CheckBox";
import Radio from "./Radio";

const Element = () => {
  const [element, setElement] = useState(false);
  const handleElement = (value) => {
    console.log("hello", value);
    setElement(value);
  };
  return (
    <div>
      <div className="inline-grid grid-cols-2 gap-4 m-3 p-2">
        <span
          className="bg-cyan-700 text-center ml-5 hover:bg-cyan-500 text-white font-bold py-2 px-20 border border-cyan-700 rounded cursor-pointer"
          onClick={() => handleElement("textinput")}
        >
          Text Input
        </span>
        <span
          className="bg-cyan-700 text-center ml-5 hover:bg-cyan-500 text-white font-bold py-2 px-20 border border-cyan-700 rounded cursor-pointer"
          onClick={() => handleElement("textarea")}
        >
          Text Area
        </span>
        <span
          className="bg-cyan-700 text-center ml-5 hover:bg-cyan-500 text-white font-bold py-2 px-20 border border-cyan-700 rounded cursor-pointer"
          onClick={() => handleElement("dropdown")}
        >
          Dropdown
        </span>
        <span
          className="bg-cyan-700 text-center ml-5 hover:bg-cyan-500 text-white font-bold py-2 px-20 border border-cyan-700 rounded cursor-pointer"
          onClick={() => handleElement("checkbox")}
        >
          {" "}
          Checkbox
        </span>
        <span
          className="bg-cyan-700 text-center ml-5 hover:bg-cyan-500 text-white font-bold py-2 px-20 border border-cyan-700 rounded cursor-pointer"
          onClick={() => handleElement("radio")}
        >
          Radio button
        </span>
      </div>
      <div>
        {element === "textinput" && <TextInput />}
        {element === "textarea" && <TextArea />}
        {element === "dropdown" && <DropDown />}
        {element === "checkbox" && <CheckBox />}
        {element === "radio" && <Radio />}
      </div>
    </div>
  );
};

export default Element;
