import React from 'react';
import "./resume.css";
import Card from "./Card.jsx";
import data from "../../data/api3"

const Resum = () => {
    return (
        <>
          <section className="resume" id="resume">
            <div className="container top">
              <div className="heading text-center">
                <h4>I'm a newbie. buy my resume...</h4>  
                <h1>My Resume</h1>
              </div>

              <div className="content-section mtop d-flex">
                  <ul className="container">
                  {data.map((val, index) => {
                      return <Card
                      key={index}
                      category={val.category}
                      year={val.year}
                      title={val.title}
                      desc={val.desc}
                      rage={val.rage}
                      />
                  })}
                  </ul>
              </div>
            </div>  
          </section>  
        </>
    );
};

export default Resum;