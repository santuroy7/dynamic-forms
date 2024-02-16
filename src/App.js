import "./App.css";
import Element from "./component/Element";
import { useState } from "react";
import EmptyForm from "./component/EmptyForm";
import MainForm from "./component/MainForm";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const elements = () => {
    // alert("Hello");
    // console.log("Hello");
    // <Element />;
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div>
        <h1>Create your form</h1>
        <button onClick={() => elements()}>Add Element</button>
        {isVisible ? <Element /> : <EmptyForm />}
        {<MainForm />}
      </div>
    </>
  );
}

export default App;
