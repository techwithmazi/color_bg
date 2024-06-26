import Square from "./Square";
import Input from "./Input";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isdarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isdarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
