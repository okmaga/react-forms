import React, { useState, useEffect, useRef } from "react";
import TextInput from "../components/form/TextInput";
import { validator } from "../utils/validator";
import "./form.css";

const Signin = ({ onSubmit }) => {
  const size = "md";
  const formRef = useRef(null);
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const validatorConfig = {
    password: {
      isRequired: { message: "enter a password" }
    },
    email: {
      isRequired: { message: "enter an email" },
      isEmail: { message: "enter a valid email" }
    }
  };
  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (target) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    setData({
      email: "",
      password: ""
    });
    setErrors({});
    formRef.current.reset();
  };

  const isValid = Object.keys(errors).length === 0;

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1 className="form-title">Sign in</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="input-container">
            <TextInput
              name="email"
              type="email"
              label="Email"
              placeholder="email"
              size={size}
              borderRadius={size}
              required
              error={errors.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <TextInput
              name="password"
              type="password"
              label="Password"
              placeholder="password"
              size={size}
              borderRadius={size}
              required
              error={errors.password}
              onChange={handleChange}
            />
          </div>
          <button disabled={!isValid} style={{ fontSize: "1.2rem" }}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
