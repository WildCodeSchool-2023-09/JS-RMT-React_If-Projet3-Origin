import React from "react";

import "./InscriptOrigins.css";

function InscriptOrigins() {
  return (
    <div>
      <h1>Inscription</h1>
      <main>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Nom
            <input type="text" name="lastname" required />
          </label>
          <label>
            Prénom
            <input type="text" name="firstname" required />
          </label>
          <label>
            Mail
            <input type="mail" name="mail" required />
          </label>
          <label>
            Pseudo
            <input type="text" name="pseudo" required />
          </label>
          <label>
            Mot de passe
            <input type="password" name="password" required />
          </label>
          <label>
            Confirmation du mail
            <input type="password" name="comfirmedPassword" required />
          </label>
          <button className="Inscription" type="submit">
            Inscription
          </button>
        </form>
      </main>
    </div>
  );
}

export default InscriptOrigins;
