import  { useState } from "react";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(value === "" || !/\S+@\S+\.\S+/.test(value));
  };

  const forgotPassword = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/users/getmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        credentials: "include",
        body: JSON.stringify({ email:email }),
      });
  
      if (response.ok) {
        alert("✅ L'e-mail a été envoyé avec succès !");
        
        // Rediriger vers Gmail
        window.open("https://mail.google.com/", "_blank"); 
      } else {
        alert("❌ Échec de l'envoi de l'e-mail. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
      alert("⚠ Une erreur est survenue. Veuillez réessayer.");
    }
  };
  
  
  return (
    <main >
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
          
              <div className="form-container sign-in-container">
                <div className="logo">
                  <img src="/images/favicon-96x96.png" alt="Smart190" />
                  <h4>Smart190</h4>
                </div>
                <form>
                  <h1>Forgot your password?</h1>
                  <input
                    type="email"
                    placeholder="nom@gmail.com"
                    name="email"
                    required
                    onChange={handleEmailChange}
                    className={emailError ? "input-error" : "bbb"}
                  />
                  {emailError && <small className="error-msg">Email invalide</small>}
                  <button type="submit" onClick={forgotPassword}>
                    Send Mail
                  </button>
                </form>
              </div>
           
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img src="/images/hero-img.png" className="image show" alt="Hero" />
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
    </main>
  );
}

export default SignInForm;
