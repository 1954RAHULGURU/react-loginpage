import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import { useNavigate } from "react-router-dom";


const Login = ({userDetails}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const nav = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    const data = {userName,password}
    userDetails(data);

    if (userName && password) {
      nav("/Home");
    }
  };
  const validate = () => {
    const error = {};

    if (!userName) {
      error.userName = "this field is required";
    } else error.userName = "";

    if (!password) {
      error.password = "password is required";
    } else error.password = "";
    return error;
  };

  return (
    <div class='container-fluid bg-dark'>
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3 txt">Login form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2 ">
            <label htmlFor="userName" className="form-label">
             User Name
            </label>
            <br />
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              className={errors.userName ? "highlight" : ""}
            />
            {errors.userName && <div className="error">{errors.userName}</div>}
          </div>

          <div className="form-group mb-2 ">
            <label htmlFor="password" className="form-label">
              Password
            </label>{" "}
            <br />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "highlight" : ""}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-success mt-4 p-2 w-100">
            submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
