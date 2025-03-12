import React, { useState } from "react";

import {useParams} from 'react-router-dom'

function Resetpassword() {
 
  const [password, setPassword] = useState("");
const [passwordError, setPasswordError] = useState(false);
  const [showPassword] = React.useState(false);


        
  
        const isFormValid = () => password && !passwordError ;

        const handlePasswordChange = (event) => {
          const { value } = event.target;
          setPassword(value);
          setPasswordError(value.length < 8);
        };
        const {userid}=useParams()

  const forgotPassword = async (e) => {
    e.preventDefault();
    const response =await fetch(`http://localhost:5000/users/ResetPassword/${userid}`, {
             method: "PATCH",
          headers: {
              "Content-Type": "application/json", // ✅ Correction ici
              "X-Requested-With": "XMLHttpRequest"
          },
          credentials: "include", // ✅ Active l'envoi des cookies/sessions
          body: JSON.stringify({
              password: password,
          })
      });           console.log(response)

  }

  return (
    <div className="center">
    
      <form >
        <h1>forgotpassword </h1>
       
        <input
      type={showPassword ? "text" : "password"}
      placeholder="mot de passe"
      name="password"
      required
      onChange={handlePasswordChange}
      className={passwordError ? "input-error" : ""}
    />      {passwordError && <small className="error-message">Le mot de passe doit contenir au moins 8 caractères.</small>}

        <button 
      type="submit"
      disabled={!isFormValid()} 
      onClick={forgotPassword}
    > send email de forgot password
    </button>
    

       
      </form>
    </div>
  );
}

export default Resetpassword;
