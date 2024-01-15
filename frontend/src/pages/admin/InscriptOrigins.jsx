import React from "react";

import "./InscriptOrigins.css";

function InscriptOrigins() {
  return (
    <div>
      <h1> InscriptOrigins </h1>
      <main>
        <form>
          <label>
            Nom
            <input type="text" name="text" required />
          </label>
          <label>
            prénom
            <input type="text" name="text" required />
          </label>
          <label>
            Mail
            <input type="mail" name="mail" required />
          </label>
          <label>
            Pseudo
            <input type="pseudo" name="pseudo" required />
          </label>
          <label>
            Mot de passe
            <input type="mot de passe" name="mot de passe" required />
          </label>
          <label>
            Confirmation du passe
            <input type="comfi du mot passe" name="comfi passe" required />
          </label>
          <button className="Incription" type="submit">
            Inscrption
          </button>
        </form>
      </main>
    </div>
  );
}

export default InscriptOrigins;
