import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Resetpassword1() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();  // Récupération de l'ID depuis l'URL (sans token)
  const navigate = useNavigate();

  // Gestion du changement de mot de passe
  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setPasswordError(value.length < 8);  // Validation du mot de passe (minimum 8 caractères)
  };

  // Permet d'afficher/masquer le mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Fonction de réinitialisation du mot de passe
  const forgotPassword = async (e) => {
    e.preventDefault();

    // Vérification que le mot de passe a au moins 8 caractères
    if (password.length < 8) {
      setPasswordError(true);
      return;
    }

    try {
      // Affichage pour vérifier les valeurs envoyées
      console.log(`ID: ${id}, Nouveau mot de passe: ${password}`);

      const response = await fetch(`http://localhost:5000/users/reset-password/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword: password }), // Envoi du mot de passe
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Erreur de réinitialisation du mot de passe.");
      } else {
        console.log("Mot de passe mis à jour avec succès !");
        navigate("/loginPage");  // Redirection vers la page de connexion après succès
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      setErrorMessage("Erreur de communication avec le serveur.");
    }
  };

  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <div className="form-container sign-in-container">
              <div className="logo">
                <img src="/images/favicon-96x96.png" alt="Smart190" />
                <h4>Smart190</h4>
              </div>
              <form onSubmit={forgotPassword}>
                <h1>Nouveau mot de passe</h1>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mot de passe"
                  name="password"
                  value={password}
                  required
                  onChange={handlePasswordChange}
                  className={passwordError ? "input-error" : ""}
                />
                {passwordError && (
                  <small className="error-message">
                    The password must contain at least 8 characters.
                  </small>
                )}

                {/* Toggle password visibility */}
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? "Cacher le mot de passe" : "Afficher le mot de passe"}
                </button>

                <button
                  type="submit"
                  disabled={passwordError}
                >
                  Mettre à jour
                </button>
              </form>

              {/* Affichage des messages d'erreur */}
              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img src="/images/hero-img.png" className="image show" alt="Hero" />
            </div>
            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Manage your health easily</h2>
                  <h2>Stay safe with Smart190</h2>
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
    </main>
  );
}

export default Resetpassword1;
