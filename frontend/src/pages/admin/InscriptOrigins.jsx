import React from "react";

import "./InscriptOrigins.css";

function InscriptOrigins() {
  return (
    <div className="inscript">
      <h1>InscriptOrigins</h1>
      <section>
        <main>
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="labelInscription" type="text" name="text">
              Nom
              <input
                className="inputInscription"
                type="text"
                name="text"
                required
              />
            </label>
            <label className="labelInscription" type="text" name="text">
              Prénom
              <input
                className="inputInscription"
                type="text"
                name="text"
                required
              />
            </label>
            <label className="labelInscription" type="text" name="text">
              Mail
              <input
                className="inputInscription"
                type="mail"
                name="mail"
                required
              />
            </label>
            <label className="labelInscription" type="text" name="text">
              Pseudo
              <input
                className="inputInscription"
                type="text"
                name="text"
                required
              />
            </label>
            <label
              className="labelInscription"
              type="text"
              name="text"
              required
            >
              Mot de passe
              <input
                className="inputInscription"
                type="password"
                name="password"
                required
              />
            </label>
            <label
              className="labelInscription"
              type="password"
              name="password"
              required
            >
              Confirmation du passe
              <input
                className="inputInscription"
                type="password"
                name="comfirmedPassword"
                required
              />
            </label>

            <button className="Inscription" type="submit">
              Inscription
            </button>
          </form>
        </main>
      </section>
    </div>
  );
}

export default InscriptOrigins;
