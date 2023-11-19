import React from "react";
import "./radioInput.css";
const style = {
  fontSize: {
    xs: "0.8rem",
    sm: "1rem",
    md: "1.2rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  errorFontSize: {
    xs: "0.5rem",
    sm: "0.8rem",
    md: "1rem",
    lg: "1.2rem",
    xl: "1.5rem"
  },
  borderRadius: {
    xs: "2px",
    sm: "5px",
    md: "10px",
    lg: "15px",
    xl: "20px"
  }
};

const RadioInput = ({
  name,
  type = "text",
  size,
  borderRadius,
  description,
  label,
  required,
  error,
  options,
  onChange,
  icon
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div
      className="radio-input-wrapper"
      style={{ fontSize: style.fontSize[size] }}
    >
      <fieldset>
        <legend>{label}</legend>
        {options.map((option) => (
          <div className="radio-option-wrapper" key={option}>
            <input
              className="input-radio"
              type="radio"
              id={option}
              name={name}
              value={option}
              onChange={handleChange}
            />
            <label className="label-radio" htmlFor={option}>
              {option}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export default RadioInput;
