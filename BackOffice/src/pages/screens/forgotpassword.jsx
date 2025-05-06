import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";


function ForgotPassword() {
 
const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
 const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const isFormValid = () => email && !emailError ;

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(value === "" || !/\S+@\S+\.\S+/.test(value));
  };

  const forgotPassword = async (e) => {
    e.preventDefault();
    const response =await fetch('http://localhost:5000/users/getmail1', {
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
      if (response.ok) {
        setSuccess("✅ L'e-mail a été envoyé avec succès !"); 

        // Rediriger vers Gmail
        window.open("https://mail.google.com/", "_blank"); }
  }

  return (
    <div className="center">
    
      <form >
      <a style={{ marginRight: '294px',}} href="/">return</a>

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
        <Snackbar
                   autoHideDuration={2500}
                   open={err === "" ? false : true}
                   onClose={() => {
                     setErr("");
                   }}
                 >
                   <Alert
                     variant="filled"
                     severity="error"
                     onClose={() => {
                       setErr("");
                     }}
                   >
                     {err}
                   </Alert>
                 </Snackbar>
                 <Snackbar
                   autoHideDuration={2500}
                   open={success === "" ? false : true}
                   onClose={() => {
                     setSuccess("");
                   }}
                 >
                   <Alert
                     variant="filled"
                     severity="success"
                     onClose={() => {
                       setSuccess("");
                     }}
                   >
                     {success}
                   </Alert>
                 </Snackbar>
    </div>
  );
}

export default ForgotPassword;
