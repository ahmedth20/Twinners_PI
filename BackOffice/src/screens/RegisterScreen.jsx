import React, {useState} from 'react'
import { Button,Form} from 'react-bootstrap';
//import axios from 'axios'
//import {isEmpty, isEmail, isLength} from '../../../components/utils/validation/Validation'

import { GoogleLogin } from '@react-oauth/google';

import FacebookLogin from '@greatsumini/react-facebook-login';


function Inscrire() {
    
    
   // const [user, setUser] = useState(initialState)
   // const {name, email, password, err, success} = user

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

   /* const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }*/
  
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          try {
              const response = await fetch("http://localhost:5000/users", {
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
              });
              localStorage.setItem('token', JSON.stringify(response.data.accessToken));
              const data = await response.json(); // ✅ Vérifier la réponse JSON
              console.log(data);
      
          } catch (error) {
              console.error("Erreur:", error);
          }
      };
      
       
    
   // {err && alert(err)}
   // {success && alert(success)}
   
  const [showPassword] = React.useState(false);
  const decodeJWT = (token) => {
    const base64Url = token.split(".")[1]; // Récupère la partie payload du token
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64)); // Décode en JSON
};


  const handleGoogleRegister = async (credentialResponse) => {
    try {
        const { credential } = credentialResponse;
        const decoded = decodeJWT(credential); 
        const userGoogleData = {
            email: decoded.email,
            name: decoded.name,
            googleId: decoded.sub,
            avatar: decoded.picture,
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
       console.log(data)
      
        } catch (error) {
          console.error("Erreur de connexion Facebook :", error);
          alert("Échec de connexion avec Facebook. Veuillez réessayer.");
        }
      };

    const isFormValid = () => {
        // add validation rules here
        return  email !== '' && password !== ''  && !emailError && !passwordError;
      };
     
      const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        setEmailError(value === '' || !/\S+@\S+\.\S+/.test(value));
      };
    
      const handlePasswordChange = (event) => {
        const { value } = event.target;
        setPassword(value);
        setPasswordError(value.length < 8);
      };

    var fex=false
    return (
      <div className={`${fex ? "inscrire":"" } `} >
      <div className='content-profil' style={{width:'800px',marginLeft:'24%',marginBottom:'150px'}}>
      <h2 className="title-inscri" style={{marginTop:'18px'}}>inscrire</h2>
                  <p className="sous-title-inscri">
                    Passez votre temps libre à étudier avec les meilleurs
                    instructeurs. 
                  </p>

        <Form   className="form" style={{width:'90%',marginLeft:'5%'}}>
            
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
              saisir un  email addresse valide
               </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="labelForm" >Mot de passe</Form.Label>
                <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Créez votre mot de passe" 
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
            <Button  className='btn-inscr'  type="submit" size="lg" onClick={handleSubmit} disabled={!isFormValid()}>
                inscrire
            </Button>
            <Form.Label style={{ textAlign: "center" }}>ou</Form.Label>
            <div style={{ textAlign: "center" }}>
            <GoogleLogin text="signup_with"
    onSuccess={handleGoogleRegister} 
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
      🔵 inscrire avec Facebook
    </button>)}
   
/>
<FacebookLogin
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
      🔵 inscrire avec Facebook
    </button>
  )}
  onProfileSuccess={handleFacebookLogin}
/>
              {/* <GoogleLogin
                clientId="797042793580-ja939nj1f6murn9clhcu9b1inogtrgor.apps.googleusercontent.com"
                buttonText="Continuer avec Google"
                onSuccess={responseGoogle}
                cookiePolicy={"single_host_origin"}
                className={"google-button"}
                icon={<Google />}
              /> */}


             
            { /* { <FacebookLogin style={{ borderColor:'black',width:'50%',marginLeft:'140px'}}
                appId="5341302392569355"
                autoLoad={false}
                cssClass="facebook-button"
                fields="name,email,picture"
                callback={responseFacebook}
                icon={
                  <FacebookRounded
                    style={{ color: "#0163E0", marginRight: 59 }}
                  />
                }
              />} */}
            </div>
            <Form.Label style={{marginBottom:'15px'}}>Vous avez déjà un compte ?
                <a href="/connexion" style={{ marginLeft:'5px'}} className="link" onClick={() => fex=true}>Se connecter</a> 
            </Form.Label>
        </div>
      </Form>
      
     
      </div> 
    </div>
  )
}

export default Inscrire;