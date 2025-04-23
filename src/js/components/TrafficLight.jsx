import { React, useState, useRef } from "react";
import Buttons from "./Buttons";

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

  const [currentLight, setCurrentLight] = useState(null);
  const intervalId = useRef(null);

  const turnOnLight = (e) => {
    setCurrentLight(e.target.id);
  };

  const changeLight = () => {
    if (currentLight === null) {
      setCurrentLight("red");
    } else if (currentLight === "red") {
      setCurrentLight("yellow");
    } else if (currentLight === "yellow") {
      setCurrentLight("green");
    } else {
      setCurrentLight("red");
    }
  };

  const interval = () => {
    setInterval(() => {}, 1000);
  };

  const getClass = (color) => {
    if (color === currentLight) {
      if (color === "red") return "bg-danger";
      if (color === "yellow") return "bg-warning";
      if (color === "green") return "bg-success";
    }
    return "";
  };

  return (
    <>
      <div className="trafficLight m-auto mb-5" style={trafficLight}>
        <div
          id="red"
          className={getClass("red")}
          style={light}
          onClick={turnOnLight}
        ></div>
        <div
          id="yellow"
          className={getClass("yellow")}
          style={light}
          onClick={turnOnLight}
        ></div>
        <div
          id="green"
          className={getClass("green")}
          style={light}
          onClick={turnOnLight}
        ></div>
      </div>
      <Buttons changeLight={changeLight} interval={interval} />
    </>
  );
};

export default TrafficLight;
