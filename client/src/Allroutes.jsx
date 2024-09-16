import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Askquestion from "./pages/Askquestion/Askquestion";
import Auth from "./pages/Auth/Auth";
import Question from "./pages/Question/Question";
import Displayquestion from "./pages/Question/Displayquestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import Userprofile from "./pages/Userprofile/Userprofile";

const Allroutes = ({ slidein, handleSlidein }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home slidein={slidein} handleSlidein={handleSlidein} />}
      />
      <Route path="/Askquestion" element={<Askquestion />} />
      <Route path="/Auth" element={<Auth />} />
      <Route
        path="/Questions"
        element={<Question slidein={slidein} handleSlidein={handleSlidein} />}
      />
      <Route
        path="/Questions/:id"
        element={
          <Displayquestion slidein={slidein} handleSlidein={handleSlidein} />
        }
      />
      <Route
        path="/Tags"
        element={<Tags slidein={slidein} handleSlidein={handleSlidein} />}
      />
      <Route
        path="/Users"
        element={<Users slidein={slidein} handleSlidein={handleSlidein} />}
      />
      <Route
        path="/Users/:id"
        element={
          <Userprofile slidein={slidein} handleSlidein={handleSlidein} />
        }
      />
    </Routes>
  );
};

export default Allroutes;
