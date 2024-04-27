import { useState } from "react";
import "./App.css";
import Card from "./Common/Card";
import { Minus, Plus } from "lucide-react";

function App() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("grey");
  const add = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  const remove = () => {
    setCount(count - 1);
  };

  return (
    <>
      {/* <Card btnName={'Click'} />
      <div>
        <p>Count is : {count}</p>
        <button type="button"
          className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
          onClick={add} >Increment
          <Plus className="h-4 w-4" />
        </button>
        <span> </span>
        <button type="button"
          className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
          onClick={remove}>Decrement
          <Minus className="h-4 w-4" />
        </button>
      </div> */}
      <div
        className="h-screen w-full duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "Red" }} onClick={()=>setColor('Red')}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "Green" }} onClick={()=>setColor('Green')}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "Blue" }} onClick={()=>setColor('Blue')}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "Black" }} onClick={()=>setColor('Black')}
            >
              Black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "Brown" }} onClick={()=>setColor('Brown')}
            >
              Brown
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
