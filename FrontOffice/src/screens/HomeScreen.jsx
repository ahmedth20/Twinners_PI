import React, { useState } from "react";
import "./styless.css";
import SignInForm from "./login";
import SignUpForm from "./register";

export default function HomeScreen() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">

      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 style={{

                color: 'black',
              }}>Welcome Back!</h1>
              <p style={{

                color: 'black',
              }}>
                To keep connected with us please login with your personal info
              </p>
              <button style={{

                color: 'black',
              }}
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 style={{

                color: 'black',
              }}>Hello, Friend!</h1>
              <p style={{

                color: 'black',
              }}>Enter your personal details and start journey with us</p>
              <button style={{

                color: 'black',
              }}
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
