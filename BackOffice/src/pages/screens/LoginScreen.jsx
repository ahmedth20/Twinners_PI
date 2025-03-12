import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {useSelector} from 'react-redux'

import FacebookLogin from '@greatsumini/react-facebook-login';

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login,logout } from "../slices/authSlice";

import { GoogleLogin } from '@react-oauth/google';

//import { jwtDecode } from "jwt-decode";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [showPassword] = React.useState(false);
  const { user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();


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
    
    dispatch(login({ user: data }));
console.log(data)
setTimeout(() => {
  fetch("http://localhost:5000/users/logout", { method: "POST", credentials: "include" })
      .then(() => {
          dispatch(logout());
          localStorage.removeItem("user");
          alert("Votre session a expiré. Veuillez vous reconnecter.");
      })
      .catch(err => console.error("Erreur lors de la déconnexion :", err));
}, 10 * 1000);


          
    
      }

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
          }, 10 * 1000);
      
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
              dispatch(login({ user: data }));
              setTimeout(() => {
                fetch("http://localhost:5000/users/logout", { method: "POST", credentials: "include" });
                dispatch(logout());
                localStorage.removeItem("user");
                alert("Votre session a expiré. Veuillez vous reconnecter.");
              }, 10 * 1000);
            // Sauvegarde dans le localStorage
          } catch (error) {
              console.error("Erreur de connexion Google :", error);
              alert("Échec de connexion avec Google. Veuillez réessayer.");
          }
      };
      
  

 
 
 
 
    //  setUser({ ...user, error: "", success: res.data.msg });
     
  const isFormValid = () => {
    // add validation rules here
    return email !== "" && password !== "" && !emailError && !passwordError;
  };

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
 

 

  var fex = false;
  return (
    
    <div
      className={"content-profil"}
      style={{ width: "800px", marginLeft: "24%", marginBottom: "150px" }}
    >

      <div className={`${fex ? "connexion" : ""} `}>
        <h2 className="title-inscri" style={{ marginTop: "18px" }}>
          Bienvenue
        </h2>
        <Form style={{ width: "90%", marginLeft: "5%" }}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label className="labelForm">Adresse e-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="nom@gmail.com"
              name="email"
              required
              onChange={handleEmailChange}
              isInvalid={emailError}
            />
            <Form.Control.Feedback type="invalid">
              saisir un email addresse valide
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="labelForm">Mot de passe</Form.Label>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="mot de passe"
              name="password"
              required
              onChange={handlePasswordChange}
              isInvalid={passwordError}
            />
            <Form.Control.Feedback type="invalid">
              mot de passe contient 8 caracteres
            </Form.Control.Feedback>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              className="btn-conx"
              type="submit"
              onClick={handleSubmit}
              style={{ backgroundColor: "#20384D" }}
              size="lg"
              disabled={!isFormValid()}
            >
              Se connecter
            </Button>

            <GoogleLogin text="signin_with"
  onSuccess={handleGoogleLogin}
  onError={() => alert("Échec de connexion avec Google.")}
  />

          
<FacebookLogin style={{
    backgroundColor: '#4267b2',
    color: '#fff',
    fontSize: '16px',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
  }}
  text="aa"
  appId="2033452340414185"
  render={(renderProps) => (
    <button
      onClick={renderProps.onClick}
      style={{
        backgroundColor: "#4267b2",
        color: "#fff",
        fontSize: "16px",
        padding: "12px 24px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      🔵 Se connecter avec Facebook
    </button>
  )}
  onProfileSuccess={handleFacebookLogin}
/>

            <Link
              to="/forgot_password"
              className="linkM"
              style={{ color: "#20384D" }}
            >
              Mot de passe oublié ?
            </Link>
            <Form.Label style={{ textAlign: "center" }}>ou</Form.Label>
         


            <Form.Label style={{ marginBottom: "15px" }}>
              Vous avez pas de compte ?
              <a
                href="/inscrire"
                style={{ marginLeft: "5px" }}
                className="link"
                onClick={() => (fex = true)}
              >
                {" "}
                nscrire
              </a>
            </Form.Label>
          </div>
        </Form>
      </div>
      
    </div>
  );
}

export default Connexion;


 