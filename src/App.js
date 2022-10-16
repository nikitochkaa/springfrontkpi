import {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TopNav from "./components/TopNav";
import Main from "./components/Main";
import SignUp from "./components/SignUp";
import SignIn from "./components/SingIn";
import News from "./components/News";
import NewTopic from "./components/NewTopic";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav/>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/news" element={<News/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/new" element={<NewTopic/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;