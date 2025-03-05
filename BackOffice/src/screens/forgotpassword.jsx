import React, { useState } from "react";


function SignInForm() {
 
const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);



        
  
        const isFormValid = () => email && !emailError ;

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(value === "" || !/\S+@\S+\.\S+/.test(value));
  };

  const forgotPassword = async (e) => {
    e.preventDefault();
    const response =await fetch('http://localhost:5000/users/getmail', {
             method: "POST",
          headers: {
              "Content-Type": "application/json", // ✅ Correction ici
              "X-Requested-With": "XMLHttpRequest"
          },
          credentials: "include", // ✅ Active l'envoi des cookies/sessions
          body: JSON.stringify({
              email: email,
          })
      });           console.log(response)

  }

  return (
    <div className="center">
    
      <form >
      <a style={{
 
 marginRight: '294px',
}} href="/">return</a>

        <h1  >forgotpassword </h1>
       
        <input
      type="email"
      placeholder="nom@gmail.com"
      name="email"
      required
      onChange={handleEmailChange}
      className={emailError ? "input-error" : "bbb"}
    />
        {emailError && <small className="error-msg">Email invalide</small>}
       
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

export default SignInForm;
