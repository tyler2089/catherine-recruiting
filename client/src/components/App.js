import "../styles/App.css";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Intro from "./intro";
import Homepage from "./homepage";
import JobSelect from "./jobselect";
function App() {
  const indexStore = useSelector((state) => state.index);
  return (
    <div className="App">
      <Intro></Intro>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
