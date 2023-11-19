import React, { useState, useEffect, useRef } from "react";
import TextInput from "../components/form/TextInput";
import RadioInput from "../components/form/RadioInput";
import { validator } from "../utils/validator";
import "./form.css";
import { IconAt } from "@tabler/icons-react";

const Signup = ({ onSubmit }) => {
  const size = "md";
  const formRef = useRef(null);
  const [data, setData] = useState({
    name: "",
    nickname: "",
    gender: "",
    email: "",
    password: "",
    repeatPassword: ""
  });
  const [errors, setErrors] = useState({});

  const validatorConfig = {
    nickname: {
      isRequired: { message: "enter a nickname" },
      min: { message: "nickname must be at least 3 symbols", value: 3 }
    },
    email: {
      isRequired: { message: "enter an email" },
      isEmail: { message: "enter a valid email" }
    },
    password: {
      isRequired: { message: "enter a password" },
      min: { message: "password must be at least 5 symbols", value: 5 }
    }
  };
  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    if (data.password !== data.repeatPassword) {
      errors.repeatPassword = "Passwords don't match";
    }
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
        <h1 className="form-title">Sign up</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="input-container">
            <TextInput
              name="name"
              label="Name"
              placeholder="Name"
              size={size}
              borderRadius={size}
              description="optional"
              error={errors.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextInput
              name="nickname"
              type="text"
              label="Nickname"
              placeholder="Nickname"
              size={size}
              borderRadius={size}
              description="enter your nickname"
              required
              error={errors.nickname}
              onChange={handleChange}
              icon={<IconAt color="grey" />}
            />
          </div>
          <div className="input-container">
            <TextInput
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              size={size}
              borderRadius={size}
              description="enter email"
              required
              error={errors.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <RadioInput
              name="gender"
              type="radio"
              label="Gender"
              size={size}
              borderRadius={size}
              options={["male", "female"]}
              error={errors.gender}
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
          <div className="input-container">
            <TextInput
              name="repeatPassword"
              type="password"
              label="Repeat password"
              placeholder="password"
              size={size}
              borderRadius={size}
              required
              error={errors.repeatPassword}
              onChange={handleChange}
            />
          </div>
          <button disabled={!isValid} style={{ fontSize: "1rem" }}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
