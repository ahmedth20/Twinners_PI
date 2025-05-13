import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./yosr.css";
import { login,logout } from "../../slices/authSlice";
import { Snackbar, Alert } from "@mui/material";



function Login() {
 const [isSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // États du formulaire d'inscription
 // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 // const [phoneNumber, setphoneNumber] = useState("");

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword] = React.useState(false);
      

   const handleSubmit = async (e) => {
           e.preventDefault();
         console.log('aa')
         const response = await fetch("http://localhost:5000/users/authback", {
          method: "POST",
          headers: {
              "Content-Type": "application/json", // ✅ Correction ici
              "X-Requested-With": "XMLHttpRequest"
          },
          credentials: "include", // ✅ Active l'envoi des cookies/sessions
          body: JSON.stringify({
              email: email,
              password: password,
             
          })
      });              const data = await response.json();
      console.log(data)

      if(data.message==="Connexion réussie"){
        setSuccess("you logged successfully"); 
     
      console.log("1111")
      setTimeout(() => {  dispatch(login({ user: data })); }, 1000)
  
        //setTimeout(() => { navigate("/home"); }, 1500)
      }
        else if(data.message==="Utilisateur non trouvé"){      setErr("User Not Found"); 
        }
        else if(data.message==="Utilisateur non authorizé"){      setErr("User not authorized"); 
        }
  
       else  if(data.message==="Votre compte est désactivé. Veuillez contacter l'administrateur."){      setErr("Account desactivated.Please contact your administrator."); 
       }
  
       else  if(data.message==="mot de passe invalide"){      setErr("Invalid password"); 
       }
  
     
       
  setTimeout(() => {
    fetch("http://localhost:5000/users/logout", { method: "POST", credentials: "include" })
        .then(() => {
            dispatch(logout());
            localStorage.removeItem("user");
            alert("Votre session a expiré. Veuillez vous reconnecter.");
            setTimeout(()=>{navigate("/");},500)
        })
        .catch(err => console.error("Erreur lors de la déconnexion :", err));
  }, 24 * 60 * 60  * 1000);
  
  
            
      
        }

   const isFormValid = () => email && !emailError && password.length >= 8 && !passwordError;
      //  const isFormValid1 = () => email1 && !emailError1 && password1.length >= 8 && !passwordError1;

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(value === "" || !/\S+@\S+\.\S+/.test(value));
  };


  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setPasswordError(value.length < 8);
  };
 
  return (
    <main className={isSignUp ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {/* Formulaire de Connexion */}
            {!isSignUp && (
                <div className="form-container sign-in-container">
                <div className="logo">
                  <img src="/images/favicon-96x96.png" alt="Smart190" />
                  <h4>Smart190</h4>
                </div>
    <form >
      <h1>Sign in</h1>

      <input
    type="email"
    placeholder="name@gmail.com"
    name="email"
    required
    onChange={handleEmailChange}
    className={emailError ? "input-error" : "bbb"}
  />
      {emailError && <small className="error-msg">invalid Email</small>}
      <input
    type={showPassword ? "text" : "password"}
    placeholder="password"
    name="password"
    required
    onChange={handlePasswordChange}
    className={passwordError ? "input-error" : ""}
  />      {passwordError && <small className="error-message">Password must contain at least 8 caracters.</small>}

      <a href="/forgotpassword">Forgot your password?</a>
      <a href="http://localhost:5174/LoginRF">Login with FaceId</a>
      <button 
    type="submit"
    disabled={!isFormValid()} 
    onClick={handleSubmit}
  > Sign In
  </button>
 

     
    </form>
  </div>

            )}

            {/* Formulaire d'Inscription */}
           {/*  {isSignUp && (
           <div className="form-container sign-up-container">
                <form >
                

                  <h1>Create Account</h1>
                  <a className="toggle" onClick={() => setIsSignUp(false)}>Se connecter</a>
                  <input
                type="email"
                placeholder="name@gmail.com"
                name="email"
                required
                onChange={handleEmailChange1}
                className={emailError1 ? "input-error" : "bbb"}
              />
                  {emailError1 && <small className="error-msg">invalid Email</small>}
                  <input
                type={showPassword1 ? "text" : "password"}
                placeholder="password"
                name="password"
                required
                onChange={handlePasswordChange1}
                className={passwordError1 ? "input-error" : ""}
              />      {passwordError1 && <small className="error-message">Password must contain at least 8 caracters.</small>}
          
          <input
                type="text"
                onChange={handletelChange}
              />
           <input
                type="text"
                onChange={handlenameChange}
              />
                  <button 
                type="submit"
               // disabled={!isFormValid1()} 
                onClick={handleSubmit1}
              > Sign Up
              </button>
              <span style={{
           
            padding: '14px',
          }}>or use your account</span>
                   <GoogleLogin text="signup_with" style={{
                   
                   padding: '14px',
                  }}
                            onSuccess={handleGoogleRegister}
                            onError={() => alert("Échec de connexion avec Google.")}
                            />
                           
           <FacebookLogin style={{
             backgroundColor: '#fff',
             color: '#4267b2',
             fontSize: '14px',
             border: '1 px solid blue', // Bordure noire
             borderRadius: '4px',paddingTop: '14px',
           }}
                       text="aa"
                       appId="2033452340414185"
                       render={(renderProps) => (
                         <button
                           onClick={renderProps.onClick}
                           style={{
                             backgroundColor: "#fff",padding: '14px',
                             color: "#4267b2",
                             fontSize: "14px",
                            // padding: "12px 24px",
                            border: '1px solid blue',
                             borderRadius: "4px",
                             cursor: "pointer",
                           }}
                         >     <i className="fab fa-facebook-f"  style={{
             backgroundColor: '#fff',
             color: '#4267b2',
             fontSize: '14px',marginRight:'14px',
             borderRadius: '4px',
           }}/>
           
                            Sign up with Facebook
                         </button>
                       )}
                       onProfileSuccess={handleFacebookLogin}
                     />
                </form>
              </div>
            )}*/}
          </div>

          {/* Section Droite avec Image et Animation */}
          <div className="carousel">
            <div className="images-wrapper">
              <img src="images/hero-img.png" className="image show" alt="Hero" />
            </div>
            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Manage your health easily</h2>
                  <h2>Stay safe with Smart 190</h2>
                  <h2>Consult professionals online</h2>
                </div>
              </div>
              <div className="bullets">
                <span className="active"></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </main>
  );
}

export default Login;