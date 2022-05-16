import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./Body/Body";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
