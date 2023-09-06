import React from "react";
import "./home.css";
import { BsPlayCircle } from "react-icons/bs";
import events from './Events'

const Home = () => {
  return (
    <>
      <div className="Container">
        <div className="tag">The-Generics</div>
        <div className="text">Get Our Latest Album</div>
        <div className="button">
          <BsPlayCircle />
        </div>
      </div>
      <div className="tours">
        <h3>Tours</h3>
        { events.map((item,index)=>(  <div className="box">
          {" "}
         <div className="shows">
            <span>{item.date}</span>
            <span>{item.location}</span>
            <span>{item.venue}</span>
            <button className="ticket-btn">Buy Tickets</button>
          
        
          </div>
          <hr></hr>
        </div>))}
      </div>
    </>
  );
};

export default Home;
