import React from "react";

const TrafficLight = () => {
  let trafficLight = {
    background: "#333",
    width: "100px",
    padding: "20px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    boxShadow: "0 0 10px #000",
  };

  let light = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#111",
    boxShadow: "inset 0 0 10px #000",
  };

  let red = {
    backgroundColor: 'red',
  }
  
  let yellow = {
    backgroundColor: 'yellow',
  }

  let green = {
    backgroundColor: 'green',
  }
  
  return (
    <div className="trafficLight" style={trafficLight}>
      <div className="" style={light}></div>
      <div style={light}></div>
      <div style={light}></div>
    </div>
  );
};

export default TrafficLight;
