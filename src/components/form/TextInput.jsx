import React, { useState } from "react";
import "./textInput.css";
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

const TextInput = ({
  name,
  type = "text",
  placeholder,
  size,
  borderRadius,
  description,
  label,
  required,
  error,
  onChange,
  icon
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
    setIsTouched(false);
  };

  const handleBlur = ({ target }) => {
    if (target.value) {
      setIsTouched(true);
    }
  };

  return (
    <div
      className="text-input-wrapper"
      style={{ fontSize: style.fontSize[size] }}
    >
      <label>
        {label}
        <span className="asterisk">{required && "*"}</span>
      </label>
      <div className="description">{description}</div>
      <div className="input-wrapper">
        <span
          className="input-icon"
          style={{ display: icon ? "flex" : "none" }}
        >
          {icon}
        </span>
        <input
          name={name}
          onChange={handleChange}
          type={type}
          placeholder={placeholder}
          style={{
            fontSize: style.fontSize[size],
            borderRadius: style.borderRadius[borderRadius],
            paddingLeft: icon ? "45px" : "10px"
          }}
          className={isTouched && error ? "input-error" : ""}
          onBlur={handleBlur}
        ></input>
      </div>
      <div
        className={isTouched && error ? "error" : ""}
        style={{
          fontSize: style.errorFontSize[size]
        }}
      >
        {isTouched && error}
      </div>
    </div>
  );
};

export default TextInput;
