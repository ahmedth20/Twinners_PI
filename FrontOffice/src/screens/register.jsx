import React, {useState} from 'react'

import { GoogleLogin } from '@react-oauth/google';

import FacebookLogin from '@greatsumini/react-facebook-login';





function SignUpForm() {

    const [email, setEmail] = useState("");
        const [emailError, setEmailError] = useState(false);
        const [password, setPassword] = useState("");
        const [passwordError, setPasswordError] = useState(false);
    const decodeJWT = (token) => {
        const base64Url = token.split(".")[1]; // Récupère la partie payload du token
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        return JSON.parse(atob(base64)); // Décode en JSON
    };
      const [showPassword] = React.useState(false);
    
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
    

  return (
    <div className="form-container sign-up-container">
      <form >
        <h1>Create Account</h1>
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

        <button 
      type="submit"
      disabled={!isFormValid()} 
      onClick={handleSubmit}
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
  );
}

export default SignUpForm;
