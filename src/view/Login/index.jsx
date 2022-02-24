import React, { useState } from "react";
import Button from "../../components/Button";
import { useInput } from "../../hooks/input-hook";
import pablo from "../../resource/pablo.svg";
import "./style.scss";

export default function Login() {
  const { value: email, change: changeEmail, reset: resetEmail } = useInput("");
  const [type, setType] = useState("password");
  const {
    value: password,
    change: changePassword,
    reset: resetPassword,
  } = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    resetEmail();
    resetPassword();
  };
  const showPassword = (e) => {
    if (type == "password") {
      e.preventDefault();
      setType("text");
    }
    if (type == "text") {
      e.preventDefault();

      setType("password");
    }
  };

  return (
    <div className="login">
      <div className="left">
        <img src={pablo} alt="pablo" />
      </div>
      <div className="right">
        <div className="right-content">
          <div className="div">
            <h1>Welcome !</h1>
            <p>Enter details to login.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="auth-form-item">
              <input
                placeholder="Enter your e-mail"
                type="email"
                {...changeEmail}
              />
            </div>
            <div className="auth-form-item-pass">
              <input
                placeholder="Enter your password"
                type={type}
                {...changePassword}
              />
              <span onClick={showPassword}>SHOW</span>
            </div>

            {/* <p className="forgot">Forgot Password</p> */}
            <Button title="LOG IN" type="submit" option={1} />
          </form>
        </div>
      </div>
    </div>
  );
}
