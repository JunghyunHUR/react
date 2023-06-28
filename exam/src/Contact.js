// Contact.js
import React from "react";
import {Link} from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact Page입니다.</h1> 
      <Link style={{color: "#000", textDecoration : "none", border : "1px solid #333", borderRadius : "10px", padding : "10px"}} className="home" to="/">Home으로</Link>
    </div>
  );
};

export default Contact;
