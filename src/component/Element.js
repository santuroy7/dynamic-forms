import React from "react";
import "./Element.css";
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
      <div className="element-container">
        <span onClick={() => handleElement("textinput")}>Text Input</span>
        <span onClick={() => handleElement("textarea")}>Text Area</span>
        <span onClick={() => handleElement("dropdown")}>Dropdown</span>
        <span onClick={() => handleElement("checkbox")}> Checkbox</span>
        <span onClick={() => handleElement("radio")}>Radio button</span>
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
