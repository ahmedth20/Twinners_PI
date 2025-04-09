import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./yosr.css";
import { login,logout } from "../../slices/authSlice";
import { Snackbar, Alert } from "@mui/material";



function Login() {
 // const [isSignUp, setIsSignUp] = useState(false);
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
    
  /*  const decodeJWT = (token) => {
        const base64Url = token.split(".")[1]; // Récupère la partie payload du token
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        return JSON.parse(atob(base64)); // Décode en JSON
    };
    */
   /*   const handleGoogleRegister = async (credentialResponse) => {
        try {
            const { credential } = credentialResponse;
            const decoded = decodeJWT(credential); 
            const userGoogleData = {
                email: decoded.email,
                firstName: decoded.name,
                googleId: decoded.sub,
                avatar: decoded.picture,
                role:"patient"
            };
    
            console.log("Google User Data:", userGoogleData);
    
            // 🔹 Enregistrement de l'utilisateur dans la base de données
            const response = await fetch("http://localhost:5000/users/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userGoogleData),
            });
            console.log("Google User Data:", response);
    
            
        } catch (error) {
            console.error("Erreur d'enregistrement Google :", error);
            alert("Échec de l'enregistrement avec Google. Veuillez réessayer.");
        }
    };
    const handleFacebookLogin = async (response) => {
        try {
          console.log("Facebook Login Response:", response);
          
        
          const userFacebookData = {
            email: response.email,
            firstName: response.name,
            facebookId: response.id, role:"patient"
         //   accessToken: response.accessToken,
          };
      
          console.log("Facebook User Data:", userFacebookData);
      
          // Envoyer les données au backend
          const serverResponse = await fetch("http://localhost:5000/users/facebook", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
            credentials: "include",
            body: JSON.stringify(userFacebookData),
          });
      
         
      
          const data = await serverResponse.json();
       console.log(data)
      
        } catch (error) {
          console.error("Erreur de connexion Facebook :", error);
          alert("Échec de connexion avec Facebook. Veuillez réessayer.");
        }
      };
   
      const handleSubmit1 = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // ✅ Correction ici
                    "X-Requested-With": "XMLHttpRequest"
                },
                credentials: "include", // ✅ Active l'envoi des cookies/sessions
                body: JSON.stringify({name:name,phoneNumber:phoneNumber,
                    email: email,
                    password: password,
                   
                })
            });
            const data = await response.json(); // ✅ Vérifier la réponse JSON
            console.log(data);
    
        } catch (error) {
            console.error("Erreur:", error);
        }
    };
     */ 
    

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

      if(data.message=="Connexion réussie"){
        setSuccess("your logged successfully"); 
     
      console.log("1111")
      setTimeout(() => {  dispatch(login({ user: data })); }, 1000)
  
        //setTimeout(() => { navigate("/home"); }, 1500)
      }
        else if(data.message=="Utilisateur non trouvé"){      setErr("Utilisateur non trouvé"); 
        }
        else if(data.message=="Utilisateur non authorizé"){      setErr("Utilisateur non authorizé"); 
        }
  
       else  if(data.message=="Votre compte est désactivé. Veuillez contacter l'administrateur."){      setErr("Votre compte est désactivé. Veuillez contacter l'administrateur."); 
       }
  
       else  if(data.message=="mot de passe invalide"){      setErr("mot de passe invalide"); 
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

 /* const handleFacebookLoginA = async (response) => {
        try {
          console.log("Facebook Login Response:", response);
          
        
          const userFacebookData = {
            email: response.email,
            firstName: response.name,
            facebookId: response.id,
         //   accessToken: response.accessToken,
          };
      
          console.log("Facebook User Data:", userFacebookData);
      
          // Envoyer les données au backend
          const serverResponse = await fetch("http://localhost:5000/users/authf", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
            credentials: "include",
            body: JSON.stringify(userFacebookData),
          });
      
         
      
          const data = await serverResponse.json();
          dispatch(login({ user: data }));
      
          setTimeout(() => {
            fetch("http://localhost:5000/users/logout", { method: "POST", credentials: "include" });
            dispatch(logout());
            localStorage.removeItem("user");
            alert("Votre session a expiré. Veuillez vous reconnecter.");
          }, 60 *10 * 1000);
      
        } catch (error) {
          console.error("Erreur de connexion Facebook :", error);
          alert("Échec de connexion avec Facebook. Veuillez réessayer.");
        }
      };

   const handleGoogleLogin = async (credentialResponse) => {
            try {
                const { credential } = credentialResponse;
                const decoded = decodeJWT(credential); // ✅ Décodage manuel
                console.log(credential)
                const userGoogleData = {
                    email: decoded.email,
                    firstName: decoded.name,
                };
        
                console.log("Google User Data:", userGoogleData); // Vérifier dans la console
        
                // Envoyer les données au backend
                const response = await fetch("http://localhost:5000/users/authg", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest"
                    },   credentials: "include", // ✅ Active l'envoi des cookies/sessions
                    body: JSON.stringify(userGoogleData),
                });
                console.log("aaa", response);
              
                const data = await response.json();
                console.log("aaa", data);

                dispatch(login({ user: data }));if(data.role=="medecin"){    setTimeout(()=>{navigate("/dashboard_b");},500)
                }
               
                setTimeout(() => {
                  fetch("http://localhost:5000/users/logout", { method: "POST", credentials: "include" });
                  dispatch(logout());  window.location.reload()
                  localStorage.removeItem("user");
                  alert("Votre session a expiré. Veuillez vous reconnecter.");
                },60 * 10 * 1000);
              // Sauvegarde dans le localStorage
            } catch (error) {
                console.error("Erreur de connexion Google :", error);
                alert("Échec de connexion avec Google. Veuillez réessayer.");
            }
        };
        
  */
   const isFormValid = () => email && !emailError && password.length >= 8 && !passwordError;
      //  const isFormValid1 = () => email1 && !emailError1 && password1.length >= 8 && !passwordError1;

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(value == "" || !/\S+@\S+\.\S+/.test(value));
  };

 /* const handlenameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };
  const handletelChange = (event) => {
    const { value } = event.target;
    setphoneNumber(value);
  };


  const handlePasswordChange1 = (event) => {
    const { value } = event.target;
    setPassword(value);
    setPasswordError(value.length < 8);
  };
  const handleEmailChange1 = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(value == "" || !/\S+@\S+\.\S+/.test(value));
  };
*/
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
    placeholder="nom@gmail.com"
    name="email"
    required
    onChange={handleEmailChange}
    className={emailError ? "input-error" : "bbb"}
  />
      {emailError && <small className="error-msg">Email invalide</small>}
      <input
    type={showPassword ? "text" : "password"}
    placeholder="mot de passe"
    name="password"
    required
    onChange={handlePasswordChange}
    className={passwordError ? "input-error" : ""}
  />      {passwordError && <small className="error-message">Le mot de passe doit contenir au moins 8 caractères.</small>}

      <a href="/forgotpassword">Forgot your password?</a>
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
                placeholder="nom@gmail.com"
                name="email"
                required
                onChange={handleEmailChange1}
                className={emailError1 ? "input-error" : "bbb"}
              />
                  {emailError1 && <small className="error-msg">Email invalide</small>}
                  <input
                type={showPassword1 ? "text" : "password"}
                placeholder="mot de passe"
                name="password"
                required
                onChange={handlePasswordChange1}
                className={passwordError1 ? "input-error" : ""}
              />      {passwordError1 && <small className="error-message">Le mot de passe doit contenir au moins 8 caractères.</small>}
          
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
                  <h2>Gérez votre santé facilement</h2>
                  <h2>Restez en sécurité avec Smart190</h2>
                  <h2>Consultez des professionnels en ligne</h2>
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
             open={err == "" ? false : true}
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
             open={success == "" ? false : true}
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