import TopNav from "./components/TopNav";
import SignUp from "./components/SignUp";
import News from "./components/News";
import {useState} from "react";

function App() {

  return (
    <div className="App">
      <TopNav/>
      <News/>
    </div>
  );
}

export default App;