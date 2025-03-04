import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from "react-redux";
import { login,logout } from "../slices/authSlice";
import FacebookLogin from '@greatsumini/react-facebook-login';
import { useNavigate } from "react-router-dom";

function SignInForm() {
 
  const dispatch = useDispatch();
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword] = React.useState(false);


   const handleSubmit = async (e) => {
           e.preventDefault();
         console.log('aa')
         const response = await fetch("http://localhost:5000/users/auth", {
          method: "POST",
          headers: {
              "Content-Type": "application/json", // ✅ Correction ici
              "X-Requested-With": "XMLHttpRequest"
          },
          credentials: "include", // ✅ Active l'envoi des cookies/sessions
          body: JSON.stringify({
              email: email,
              password: password,
              role: "medecin"
          })
      });              const data = await response.json();
      console.log(data)

      dispatch(login({ user: data }));
      if(data.role=="medecin"){    setTimeout(()=>{navigate("/medecin");},500)
      }
      if(data.role!="medecin"){    setTimeout(()=>{navigate("/patient");},500)
      }  console.log(data)
  setTimeout(() => {
    fetch("http://localhost:5000/users/logout", { method: "POST", credentials: "include" })
        .then(() => {
            dispatch(logout());
            localStorage.removeItem("user");
            alert("Votre session a expiré. Veuillez vous reconnecter.");
        })
        .catch(err => console.error("Erreur lors de la déconnexion :", err));
  },60 * 10 * 1000);
  
  
            
      
        }
        const navigate = useNavigate();

  const handleFacebookLogin = async (response) => {
        try {
          console.log("Facebook Login Response:", response);
          
        
          const userFacebookData = {
            email: response.email,
            name: response.name,
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

  const decodeJWT = (token) => {
    const base64Url = token.split(".")[1]; // Récupère la partie payload du token
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64)); // Décode en JSON
};
   const handleGoogleLogin = async (credentialResponse) => {
            try {
                const { credential } = credentialResponse;
                const decoded = decodeJWT(credential); // ✅ Décodage manuel
                console.log(credential)
                const userGoogleData = {
                    email: decoded.email,
                    name: decoded.name,
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
                if(data.role!="medecin"){    setTimeout(()=>{navigate("/patient");},500)
                }
                setTimeout(() => {
                  fetch("http://localhost:5000/users/logout", { method: "POST", credentials: "include" });
                  dispatch(logout());
                  localStorage.removeItem("user");
                  alert("Votre session a expiré. Veuillez vous reconnecter.");
                },60 * 10 * 1000);
              // Sauvegarde dans le localStorage
            } catch (error) {
                console.error("Erreur de connexion Google :", error);
                alert("Échec de connexion avec Google. Veuillez réessayer.");
            }
        };
        
  
        const isFormValid = () => email && !emailError && password.length >= 8 && !passwordError;

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
    <div className="form-container sign-in-container">
    
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
    <span style={{
 
  padding: '14px',
}}>or use your account</span>

        <GoogleLogin text="signin_with" style={{
 
 padding: '14px',
}}
          onSuccess={handleGoogleLogin}
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

                 Sign in with Facebook
              </button>
            )}
            onProfileSuccess={handleFacebookLogin}
          />
      </form>
    </div>
  );
}

export default SignInForm;
