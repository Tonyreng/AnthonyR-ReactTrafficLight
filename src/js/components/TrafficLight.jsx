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
  const [lights, setLights] = useState(["red", "yellow", "green"]);
  const [color, setColor] = useState(null);
  const intervalId = useRef(null);
  const isPaused = useRef(false);

  const turnOnLight = (e) => {
    setCurrentLight(e.target.id);
  };

  const changeLight = () => {
    for (let i = 0; i < lights.length; i++) {
      if (currentLight === null) {
        setCurrentLight(lights[0]);
      } else if (currentLight === lights[i - 1]) {
        setCurrentLight(lights[i]);
      } else if (currentLight === lights[lights.length - 1]) {
        setCurrentLight(lights[0]);
      }
    }
  };

  const interval = () => {
    intervalId.current = setInterval(() => {
      if (isPaused.current) {
        return;
      }
      setCurrentLight((prev) => {
        for (let i = 0; i < lights.length; i++) {
          if (prev === null) {
            setCurrentLight(lights[0]);
          } else if (prev === lights[i - 1]) {
            setCurrentLight(lights[i]);
          } else if (prev === lights[lights.length - 1]) {
            setCurrentLight(lights[0]);
          }
        }
      });
    }, 1000);
  };

  const toggleInterval = () => {
    if (intervalId.current === null) {
      // Primer click: empezar
      isPaused.current = false;
      interval();
    } else {
      // Siguientes clicks: pausar o reanudar
      isPaused.current = !isPaused.current;
    }
  };

  const addColor = (color) => {
    setColor(color);
    // setLights((prevLight) => [...prevLight, color]);
  };

  const addLight = () => {
    setLights((prevLight) => [...prevLight, color]);
  };

  return (
    <>
      <div className="trafficLight m-auto mb-5" style={trafficLight}>
        {lights.map((color, idx) => (
          <div
            key={idx}
            id={color}
            onClick={turnOnLight}
            style={{
              ...light,
              backgroundColor: currentLight === color ? color : "#111",
            }}
          ></div>
        ))}
      </div>
      <Buttons
        changeLight={changeLight}
        toggleInterval={toggleInterval}
        addColor={addColor}
        addLight={addLight}
      />
    </>
  );
};

export default TrafficLight;
