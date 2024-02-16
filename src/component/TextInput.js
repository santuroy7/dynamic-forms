import React, { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { addText } from "../store/textSlice";
import { v4 as uuid } from "uuid";
const TextInput = () => {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState();
  //   console.log(textValue);
  const id = useId();

  const unique_id = uuid();
  // Get first 8 characters using slice
  const small_id = unique_id.slice(0, 8);

  const handleClick = (textValue) => {
    // console.log(textValue);
    dispatch(addText({ id: small_id, label: textValue }));
  };
  return (
    <>
      <div>
        <input
          placeholder="Enter Label"
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button onClick={() => handleClick(textValue)}>Add To Form</button>
        {/* <button>Remove</button> */}
      </div>
    </>
  );
};

export default TextInput;
