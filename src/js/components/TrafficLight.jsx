import { React, useState } from "react";
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

  let red = {
    backgroundColor: "red",
  };

  let yellow = {
    backgroundColor: "yellow",
  };

  let green = {
    backgroundColor: "green",
  };

  let [turnOnRed, setTurnOnRed] = useState("");
  let [turnOnYellow, setTurnOnYellow] = useState("");
  let [turnOnGreen, setTurnOnGreen] = useState("");

  const turnOnLight = (e) => {
    if (turnOnRed === "" && e.target.id === "red") {
      setTurnOnRed("bg-danger");
    } else {
      setTurnOnRed("");
    }

    if (turnOnYellow === "" && e.target.id === "yellow") {
      setTurnOnYellow("bg-warning");
    } else {
      setTurnOnYellow("");
    }

    if (turnOnGreen === "" && e.target.id === "green") {
      setTurnOnGreen("bg-success");
    } else {
      setTurnOnGreen("");
    }
  };

  return (
    <>
      <div className="trafficLight m-auto mb-5" style={trafficLight}>
        <div
          id="red"
          className={turnOnRed}
          style={light}
          onClick={turnOnLight}
        ></div>
        <div
          id="yellow"
          className={turnOnYellow}
          style={light}
          onClick={turnOnLight}
        ></div>
        <div
          id="green"
          className={turnOnGreen}
          style={light}
          onClick={turnOnLight}
        ></div>
      </div>
      <Buttons />
    </>
  );
};

export default TrafficLight;
