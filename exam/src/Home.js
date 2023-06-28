// Home.js
import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
  <div>
    <Link style={{color: "#000", textDecoration : "none"}} className="time" to="/Time">Time 바로기가</Link>
    <br/>
    <br/>
    <Link style={{color: "#000", textDecoration : "none"}} className="contact" to="/Contact">Contact 바로기가</Link>

  </div>
  );
};

export default Home;
