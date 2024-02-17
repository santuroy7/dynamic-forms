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
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <h1 className="text-center border-b-2 m-5 p-2 shadow-lg text-xl font-bold tracking-widest">
            Create Your Form
          </h1>
          <h1
            className="bg-cyan-900 ml-4 m-5 p-2 hover:bg-cyan-300 text-white font-bold border border-cyan-900 rounded hover:border-cyan-300 hover:text-black text-center cursor-pointer"
            onClick={() => elements()}
          >
            ADD ELEMENT
          </h1>
          {isVisible ? <Element /> : <EmptyForm />}
        </div>
        <div className="col-span-7 border-l-4">{<MainForm />}</div>
      </div>
    </>
  );
}

export default App;
