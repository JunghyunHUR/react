import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const About = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <h1>Time Page</h1>
      <p>Current time: {time}</p>
      <Link style={{color: "#000", textDecoration : "none", border : "1px solid #333", borderRadius : "10px", padding : "10px"}} className="mx-2" to="/">Home으로</Link>
    </div>
  );
};

export default About;
