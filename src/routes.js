import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import SignIn from "./components/SingIn";
import SignUp from "./components/SignUp";
import News from "./components/News";
import Main from "./components/Main";
import Topic from "./components/Topic";
import NewTopic from "./components/NewTopic";

export const useRoutes = isAuthenticated => {
  if (!isAuthenticated){
      return (
          <Routes>
              <Route path="/" element={<Main/>}></Route>
              <Route path="/signin" element={<SignIn/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/news" element={<News/>}></Route>
              <Route path="/topic/:id" element={<Topic/>}></Route>
              <Route path="*" element={<Navigate to="/" replace/>}></Route>
          </Routes>
      )
  }

  return (
      <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/news" element={<News/>}></Route>
          <Route path="/topic/:id" element={<Topic/>}></Route>
          <Route path="/new" element={<NewTopic/>}></Route>
          <Route path="*" element={<Navigate to="/" replace/>}></Route>
      </Routes>
      )
}

export default useRoutes;