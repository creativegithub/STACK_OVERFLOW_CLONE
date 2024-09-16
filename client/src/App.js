import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { fetchallusers } from "./action/users";
import Allroutes from "./Allroutes";
import { useDispatch } from "react-redux";
import { fetchallquestion } from "./action/question";

function App() {
  const [slidein, setSlidein] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallusers());
    dispatch(fetchallquestion());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSlidein(false);
    }
  }, []);

  const handleSlidein = () => {
    if (window.innerWidth <= 768) {
      setSlidein((state) => !state);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleSlidein={handleSlidein} />
        <Allroutes slidein={slidein} handleSlidein={handleSlidein} />
      </Router>
    </div>
  );
}

export default App;
