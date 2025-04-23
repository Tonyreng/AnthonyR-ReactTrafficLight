import { React } from "react";

const Buttons = (props) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center  m-3">
        <label for="exampleColorInput" className="form-label">
          Agrega un color
        </label>
        <input
          type="color"
          className="form-control form-control-color"
          id="exampleColorInput"
          title="Choose your color"
          onChange={props.addColor}
        />
      </div>
      <div className="container d-flex justify-content-between gap-2">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={props.changeLight}
        >
          Cambia la luz
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={props.setInterval}
        >
          Crea intervalo
        </button>
      </div>
    </>
  );
};

export default Buttons;
